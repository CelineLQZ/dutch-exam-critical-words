// Tinder-style swipeable card deck.
// Renders up to 3 cards stacked; top card draggable via pointer events.
// Props: items[], renderCard(item, idx, isTop, dragState), onSwipe(idx, dir, item)
// Exposes imperative .swipe('left'|'right') via ref.

const { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } = React;

const SwipeDeck = forwardRef(function SwipeDeck({ items, renderCard, onSwipe, swipeThreshold = 90 }, ref) {
  const [idx, setIdx] = useState(0);
  const [drag, setDrag] = useState({ x: 0, y: 0, dragging: false, releasing: false });
  const startRef = useRef({ x: 0, y: 0, active: false, locked: null, t: 0 });

  useEffect(() => { setIdx(0); setDrag({ x: 0, y: 0, dragging: false, releasing: false }); }, [items]);

  const commitSwipe = useCallback((dir) => {
    const item = items[idx];
    const flyX = dir === 'right' ? 650 : -650;
    setDrag({ x: flyX, y: 0, dragging: false, releasing: true });
    setTimeout(() => {
      setDrag({ x: 0, y: 0, dragging: false, releasing: false });
      setIdx(i => i + 1);
      onSwipe?.(idx, dir, item);
    }, 260);
  }, [items, idx, onSwipe]);

  useImperativeHandle(ref, () => ({
    swipe: commitSwipe,
    reset: () => { setIdx(0); },
    currentIndex: () => idx
  }), [commitSwipe, idx]);

  const onPointerDown = (e) => {
    if (drag.releasing) return;
    startRef.current = { x: e.clientX, y: e.clientY, active: true, locked: null, t: Date.now() };
  };
  const onPointerMove = (e) => {
    if (!startRef.current.active) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    if (!startRef.current.locked) {
      if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
        if (Math.abs(dx) > Math.abs(dy)) {
          startRef.current.locked = 'x';
          try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
        } else {
          startRef.current.locked = 'y';
          startRef.current.active = false;
          setDrag({ x: 0, y: 0, dragging: false, releasing: false });
          return;
        }
      } else { return; }
    }
    if (startRef.current.locked === 'x') {
      setDrag({ x: dx, y: dy * 0.3, dragging: true, releasing: false });
    }
  };
  const onPointerUp = (e) => {
    if (!startRef.current.active) { startRef.current.active = false; return; }
    startRef.current.active = false;
    if (startRef.current.locked !== 'x') {
      setDrag({ x: 0, y: 0, dragging: false, releasing: false });
      return;
    }
    const dt = Date.now() - startRef.current.t;
    const vx = drag.x / Math.max(dt, 1) * 1000;
    if (drag.x > swipeThreshold || vx > 700)       commitSwipe('right');
    else if (drag.x < -swipeThreshold || vx < -700) commitSwipe('left');
    else setDrag({ x: 0, y: 0, dragging: false, releasing: false });
  };

  if (idx >= items.length) return null;

  const visible = [];
  for (let i = idx; i < Math.min(items.length, idx + 3); i++) visible.push(i);

  return (
    <div className="deck-area">
      {visible.map((i) => {
        const isTop = i === idx;
        const depth = i - idx;
        let style = {};
        if (isTop) {
          const rot = drag.x * 0.06;
          style = {
            transform: `translate(${drag.x}px, ${drag.y * 0.4}px) rotate(${rot}deg)`,
            transition: drag.releasing
              ? 'transform 0.26s cubic-bezier(0.5, 0, 0.75, 0)'
              : drag.dragging ? 'none' : 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
            zIndex: 100 - depth
          };
        } else {
          style = {
            transform: `translate(0, ${depth * 10}px) scale(${1 - depth * 0.04})`,
            transition: 'transform 0.25s ease',
            opacity: 1 - depth * 0.2,
            zIndex: 100 - depth,
            pointerEvents: 'none'
          };
        }
        const dragState = isTop
          ? {
              x: drag.x, y: drag.y, dragging: drag.dragging,
              keepOpacity:   Math.max(0, Math.min(1,  drag.x / swipeThreshold)),
              forgotOpacity: Math.max(0, Math.min(1, -drag.x / swipeThreshold))
            }
          : { x: 0, y: 0, dragging: false, keepOpacity: 0, forgotOpacity: 0 };

        return (
          <div
            key={i}
            className="swipe-card"
            style={style}
            onPointerDown={isTop ? onPointerDown : undefined}
            onPointerMove={isTop ? onPointerMove : undefined}
            onPointerUp={isTop ? onPointerUp : undefined}
            onPointerCancel={isTop ? onPointerUp : undefined}
          >
            {renderCard(items[i], i, isTop, dragState)}
          </div>
        );
      })}
    </div>
  );
});

window.SwipeDeck = SwipeDeck;
