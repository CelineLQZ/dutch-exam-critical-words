window.SENTENCE_GRAMMAR_DATA = {
  "reference": {
    "zh": [
      {
        "type": "Type A — Verb before subject",
        "rule": "变位动词在主语前",
        "explanation": "看到“动词 + 主语”时，优先考虑这一类。常见于问句、句首时间/地点/原因/宾语前置、或条件从句前置。",
        "pattern": "疑问词 / yes-no 问句动词 / 句首成分 + 变位动词 + 主语 + 其他成分"
      },
      {
        "type": "Type B — Verb group at the end",
        "rule": "从句动词组后置",
        "explanation": "荷兰语从句里，动词组经常被放到从句后面。英文通常不会把动词拖到这么后。",
        "pattern": "dat / als / wanneer / hoe / wat / die / of + 主语 + 其他成分 + 动词组"
      },
      {
        "type": "Type C — Split verb / particle verb",
        "rule": "可分动词或小品词动词",
        "explanation": "有些荷兰语动词会拆开：前半部分放前面，小尾巴放后面。",
        "pattern": "动词前半部分 + 其他成分 + 小品词，如 denk ... na, leg ... uit, haal ... op"
      },
      {
        "type": "Type D — Dutch middle-position words",
        "rule": "小词/状语位置不同",
        "explanation": "荷兰语常把时间、地点、方式、否定词、语气小词放在句中；英文常会换位置。",
        "pattern": "主语 + 动词 + 小副词/状语/否定词/介词短语 + 其他成分"
      }
    ],
    "en": [
      {
        "type": "Type A — Verb before subject",
        "rule": "Finite verb before subject",
        "explanation": "Use this when you see verb + subject. It commonly happens in questions, after a fronted time/place/reason/object phrase, or after a fronted condition clause.",
        "pattern": "WH-word / yes-no verb / fronted element + fin. verb + subject + other parts"
      },
      {
        "type": "Type B — Verb group at the end",
        "rule": "Subclause verb-final",
        "explanation": "In Dutch subclauses, the verb group often moves toward the end. English normally keeps the verb much earlier.",
        "pattern": "dat / als / wanneer / hoe / wat / die / of + subject + other parts + verb group"
      },
      {
        "type": "Type C — Split verb / particle verb",
        "rule": "Separable verb / particle verb",
        "explanation": "Some Dutch verbs split: the main verb part appears early, and the small particle appears later.",
        "pattern": "verb part + other parts + particle, e.g. denk ... na, leg ... uit, haal ... op"
      },
      {
        "type": "Type D — Dutch middle-position words",
        "rule": "Adverb / small-word placement",
        "explanation": "Dutch often puts time, place, manner, negation, and modal particles in the middle of the sentence. English often moves them elsewhere.",
        "pattern": "subject + verb + small adverb / negation / prep. phrase + other parts"
      }
    ]
  },
  "sentences": {
    "In een opleidingsgids staan tips om te leren.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In een opleidingsgids（句首时间/地点/原因/宾语等成分）+ staan（变位动词）+ tips（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In een opleidingsgids = fronted element + staan = fin. verb + tips = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Toch geven we u een paar tips om beter te kunnen leren.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 even 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as even. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Begin met het maken van een planning: wat gaat u wanneer doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u wanneer doen，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u wanneer doen."
          }
        ]
      }
    },
    "Elke dag een beetje leren is beter dan alles op één dag leren.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U onthoudt de informatie dan beter.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Zoek uit wanneer u het beste kan leren: 's morgens, 's middags of 's avonds.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 of ’s avonds.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 uitzoeken。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. of ’s avonds.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb uitzoeken. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Leer niet langer dan een half uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Neem daarna een pauze of ga even iets heel anders doen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 heel anders doen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daarna、even、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. heel anders doen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daarna, even, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Denk niet teveel aan andere dingen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Denk daarna even na over de inhoud.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 nadenken。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daarna、even、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb nadenken. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daarna, even, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Lees dan een nieuw stuk tekst en denk weer na over die inhoud.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 over die inhoud.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 nadenken。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、weer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. over die inhoud.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb nadenken. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, weer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Ga zo verder tot het einde van de tekst.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 verdergaan。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb verdergaan. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Leg aan iemand anders uit wat u hebt gelezen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u hebt gelezen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 uitleggen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u hebt gelezen.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb uitleggen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Als u dat kunt, weet u zeker dat u het hebt begrepen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 het hebt begrepen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ weet（主句变位动词）+ u（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. het hebt begrepen.."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + weet = main fin. verb + u = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "U onthoudt informatie beter als u het aan iemand hebt verteld.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 iemand hebt verteld.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. iemand hebt verteld.."
          }
        ]
      }
    },
    "Jamie heeft volgende week een belangrijk examen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Wat moet hij volgens de tekst het eerste doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ hij（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + hij = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wanneer kan je volgens de tekst het beste leren?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ kan（变位动词）+ je（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + kan = fin. verb + je = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Noa weet niet hoe hij het beste kan leren.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 hoe 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 beste kan leren.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by hoe. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. beste kan leren.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Welk advies kan je hem geven?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Welk（疑问词/疑问成分）+ advies（变位动词）+ kan（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Welk = question element + advies = fin. verb + kan = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Ook willen wij u vertellen wat er die dag anders is voor het verkeer.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Ook（句首时间/地点/原因/宾语等成分）+ willen（变位动词）+ wij（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 voor het verkeer.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Ook = fronted element + willen = fin. verb + wij = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. voor het verkeer.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We willen dat alles zo goed mogelijk gaat en we hopen dat u weinig last hebt van de wedstrijd.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 van de wedstrijd.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. van de wedstrijd.."
          }
        ]
      }
    },
    "Ongeveer 500 hardlopers doen mee aan de hardloopwedstrijd.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meedoen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meedoen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "U kunt naar de hardlopers komen kijken, als u daar zin in heeft.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 zin in heeft.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 komen kijken。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. zin in heeft.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb komen kijken. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We willen dat alles veilig is voor de hardlopers, het verkeer en het publiek.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 en het publiek.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. en het publiek.."
          }
        ]
      }
    },
    "Daarom sluiten wij een aantal straten en wegen af.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarom（句首时间/地点/原因/宾语等成分）+ sluiten（变位动词）+ wij（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 afsluiten。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarom = fronted element + sluiten = fin. verb + wij = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb afsluiten. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Op de route mogen tot 17.00 uur geen auto's staan.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op de route（句首时间/地点/原因/宾语等成分）+ mogen（变位动词）+ tot（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op de route = fronted element + mogen = fin. verb + tot = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wij vragen u daarom uw auto vóór zaterdagmorgen 13 juni 10.00 uur weg te halen.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 weghalen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb weghalen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Auto's die er daarna nog staan zal de politie wegslepen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Auto’s die er daarna nog（句首时间/地点/原因/宾语等成分）+ staan（变位动词）+ zal（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 de politie wegslepen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 wegslepen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daarna、nog、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Auto’s die er daarna nog = fronted element + staan = fin. verb + zal = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. de politie wegslepen.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb wegslepen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daarna, nog, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Waarom krijgen de dorpsbewoners deze brief van Piet Jansen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waarom（疑问词/疑问成分）+ krijgen（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waarom = question element + krijgen = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wanneer moet hij zijn auto weghalen op zaterdag 13 juni?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ moet（变位动词）+ hij（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 weghalen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + moet = fin. verb + hij = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb weghalen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "In een meubelwinkel ligt een folder met informatie over de transportservice.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In een meubelwinkel（句首时间/地点/原因/宾语等成分）+ ligt（变位动词）+ een（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In een meubelwinkel = fronted element + ligt = fin. verb + een = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Hebt u meubels gezien die u wilt kopen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hebt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u wilt kopen，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hebt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u wilt kopen."
          }
        ]
      }
    },
    "En wilt u dat wij deze meubels bij u thuisbezorgen?": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 bij u thuisbezorgen，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 thuisbezorgen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. bij u thuisbezorgen."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb thuisbezorgen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Dan kunt u gebruikmaken van onze transportservice.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ kunt（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 gebruikmaken。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + kunt = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb gebruikmaken. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U maakt een lijstje met de meubels, op internet of in onze winkel.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 in onze winkel.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. in onze winkel.."
          }
        ]
      }
    },
    "Wij verzamelen deze meubels en bezorgen alles bij u thuis.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 thuis 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as thuis. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dit alles voor een klein bedrag.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dit（句首时间/地点/原因/宾语等成分）+ alles（变位动词）+ voor（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dit = fronted element + alles = fin. verb + voor = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "De prijzen voor het bezorgen ziet u hieronder.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：De prijzen voor het（句首时间/地点/原因/宾语等成分）+ bezorgen（变位动词）+ ziet（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 hieronder 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: De prijzen voor het = fronted element + bezorgen = fin. verb + ziet = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as hieronder. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wilt u de meubels op meer adressen laten bezorgen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Ga dan voor meer informatie naar de informatiebalie in onze winkel.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、meer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, meer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U kunt op onze website zien op welke dagen wij meubels thuisbezorgen": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 thuisbezorgen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb thuisbezorgen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Wilt u weten hoe laat wij de meubels bezorgen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 hoe 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 de meubels bezorgen，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by hoe. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. de meubels bezorgen."
          }
        ]
      }
    },
    "Bel dan naar onze klantenservice.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dit kan alleen op de dag van de bezorging, vanaf 8 uur 's ochtends.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dit（句首时间/地点/原因/宾语等成分）+ kan（变位动词）+ alleen（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 alleen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dit = fronted element + kan = fin. verb + alleen = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as alleen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Woont u op de vijfde verdieping of hoger?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Woont（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 verdieping of hoger，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Woont = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. verdieping of hoger."
          }
        ]
      }
    },
    "Wij bezorgen alleen als er een lift is.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 een lift is.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 alleen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. een lift is.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as alleen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat moet hij hiervoor betalen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ hij（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + hij = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wanneer kan zij dat vragen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ kan（变位动词）+ zij（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 zij dat vragen，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + kan = fin. verb + zij = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. zij dat vragen."
          }
        ]
      }
    },
    "Op vrijdag 9 mei gaan we met het bedrijf kanovaren!": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op vrijdag 9 mei（句首时间/地点/原因/宾语等成分）+ gaan（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op vrijdag 9 mei = fronted element + gaan = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Jan van 'Botenverhuur de Rijnstroom' wacht op ons om half 11 in Utrecht.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 om half 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as om half. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Om half 12 is er lunch met een kop koffie of thee.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Om half 12（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ er（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 koffie of thee.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 om half 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Om half 12 = fronted element + is = fin. verb + er = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. koffie of thee.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as om half. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Om half 8 eten we een pannenkoek bij het pannenkoekenhuis.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Om half 8（句首时间/地点/原因/宾语等成分）+ eten（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 om half 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Om half 8 = fronted element + eten = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as om half. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Je hoeft zelf dus geen eten mee te nemen.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen、zelf、dus 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen, zelf, dus. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Het programma eindigt om half 9.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 om half 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as om half. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat moet je meenemen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ je（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + je = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "We raden aan om extra kleding mee te nemen, voor als je kleding nat wordt op de boot.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 op de boot.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. op de boot.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Wij zullen handdoeken meenemen.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Je hoeft geen zwemkleding mee te nemen, het water is nog te koud om in te zwemmen.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen、nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen, nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Laat je weten of je erbij kunt zijn?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Laat（问句开头的变位动词）+ je（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 erbij kunt zijn，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Laat = fin. verb at the start + je = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. erbij kunt zijn."
          }
        ]
      }
    },
    "Je kunt je tot 2 mei bij Ingmar aanmelden.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 aanmelden。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb aanmelden. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Als je nog vragen hebt, kun je bellen met Charlotte, tel.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 met Charlotte tel.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ kun（主句变位动词）+ je（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. met Charlotte tel.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + kun = main fin. verb + je = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "Wat moet Sabrina meenemen naar het personeelsuitje?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ Sabrina（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + Sabrina = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Aan wie moet ze dat vragen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Aan（疑问词/疑问成分）+ wie（变位动词）+ moet（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 ze dat vragen，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Aan = question element + wie = fin. verb + moet = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. ze dat vragen."
          }
        ]
      }
    },
    "Ik zit nu in de trein van mijn werk naar huis en merk dat ik mijn tas ben vergeten!": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 tas ben vergeten，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. tas ben vergeten."
          }
        ]
      }
    },
    "Hij staat nog op mijn bureau.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wil jij hem misschien ophalen en naar de portier brengen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wil（问句开头的变位动词）+ jij（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 ophalen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wil = fin. verb at the start + jij = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb ophalen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Dan haal ik mijn tas daar morgen op.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ haal（变位动词）+ ik（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 ophalen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、morgen、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + haal = fin. verb + ik = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb ophalen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, morgen, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "In de tas zit mijn laptop.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In de tas（句首时间/地点/原因/宾语等成分）+ zit（变位动词）+ mijn（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In de tas = fronted element + zit = fin. verb + mijn = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Er zitten ook een boek en een bril in de tas.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Gelukkig heb ik mijn telefoon en portemonnee wel bij me!": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Gelukkig（句首时间/地点/原因/宾语等成分）+ heb（变位动词）+ ik（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Gelukkig = fronted element + heb = fin. verb + ik = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wil je me een bericht sturen als je de tas gevonden hebt?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wil（问句开头的变位动词）+ je（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 tas gevonden hebt，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wil = fin. verb at the start + je = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. tas gevonden hebt."
          }
        ]
      }
    },
    "Waar is de tas van Suzanne?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waar（疑问词/疑问成分）+ is（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waar = question element + is = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wat zit er in de tas van Suzanne?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ zit（变位动词）+ er（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + zit = fin. verb + er = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Op 9 juli is onze sportdag in het Sportpark in Amsterdam.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op 9 juli（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ onze（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op 9 juli = fronted element + is = fin. verb + onze = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Wilt u om 9 uur op het veld zijn?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 om 9 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as om 9. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dan kunnen we op tijd beginnen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ kunnen（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + kunnen = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We beginnen om half 10 met een tennistoernooi.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 om half 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as om half. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U kunt 's ochtends ook kiezen voor basketbal.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Daarna hebben we lunchpauze.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarna（句首时间/地点/原因/宾语等成分）+ hebben（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daarna、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarna = fronted element + hebben = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daarna, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U moet zelf uw brood meenemen, wij zorgen voor koffie en thee.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 zelf 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as zelf. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Na de pauze is er een voetbaltoernooi.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Na de pauze（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ er（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Na de pauze = fronted element + is = fin. verb + er = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Voor de kinderen is er dan een volleybalwedstrijd.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Voor de kinderen（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ er（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Voor de kinderen = fronted element + is = fin. verb + er = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Om half 7 is de sportdag afgelopen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Om half 7（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 om half 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Om half 7 = fronted element + is = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as om half. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We gaan dan barbecueën.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 mee barbecueën。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb mee barbecueën. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als u geen vlees eet, wilt u dit dan doorgeven aan Marie?": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 doorgeven。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、geen、even 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb doorgeven. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, geen, even. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Zij doet samen met Mo de boodschappen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 samen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as samen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wij kunnen de kleedkamers van het Sportpark niet gebruiken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U moet dus thuis uw sportkleren aantrekken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dus、thuis 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dus, thuis. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U moet betalen als u zich aanmeldt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u zich aanmeldt.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 aanmelden。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u zich aanmeldt.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb aanmelden. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "U kunt zich aanmelden tot 25 juni bij Jan (Vissersplein 45A).": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 aanmelden。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb aanmelden. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Vorig jaar was de barbecue alleen voor de deelnemers van de sportdag.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Vorig jaar（句首时间/地点/原因/宾语等成分）+ was（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 alleen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Vorig jaar = fronted element + was = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as alleen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dit jaar is dat anders: ook mensen die niet meedoen mogen mee barbecueën.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dit jaar（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ dat（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 mogen mee barbecueën.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meedoen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook、niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dit jaar = fronted element + is = fin. verb + dat = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. mogen mee barbecueën.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meedoen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook, niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Zij betalen dan € 10,-.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als u niet meedoet aan de sportdag, kunt u zich tot 1 juli voor de barbecue aanmelden bij Mo (Abrahamslaan 2).": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 Abrahamslaan 2 .，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 aanmelden。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ kunt（主句变位动词）+ u（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. Abrahamslaan 2 .."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb aanmelden. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + kunt = main fin. verb + u = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "Wat moet ze meenemen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ ze（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + ze = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "De kinderen van Halima doen 's middags mee met de sportdag.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meedoen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meedoen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Welke sport gaan ze doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Welke（疑问词/疑问成分）+ sport（变位动词）+ gaan（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Welke = question element + sport = fin. verb + gaan = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "De man van Halima kan niet meedoen met de sportdag.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meedoen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meedoen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat moet hij doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ hij（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + hij = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Volgende week vrijdag is de bruiloft van Nadia en Richard!": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Volgende week vrijdag（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Volgende week vrijdag = fronted element + is = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Daarom hebben we een feestcommissie opgericht.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarom（句首时间/地点/原因/宾语等成分）+ hebben（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarom = fronted element + hebben = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "We hebben alle drie een taak, zodat we er een leuke dag van kunnen maken!": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 zodat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 van kunnen maken，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by zodat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. van kunnen maken."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Wij willen een bus huren om samen met collega's naar de bruiloft te gaan.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 samen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as samen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wil je mee met de bus?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wil（问句开头的变位动词）+ je（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wil = fin. verb at the start + je = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Geef je dan op bij David.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 opgeven。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb opgeven. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als je wilt, kun je ook meedoen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 je ook meedoen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meedoen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ kun（主句变位动词）+ je（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. je ook meedoen.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meedoen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + kun = main fin. verb + je = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "We weten nog niet precies wat we gaan geven.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 we gaan geven.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、even、nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. we gaan geven.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, even, nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Op het bureau van Elise ligt een lijstje met cadeaus.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op het bureau van Elise（句首时间/地点/原因/宾语等成分）+ ligt（变位动词）+ een（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op het bureau van Elise = fronted element + ligt = fin. verb + een = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Kruis op het lijstje aan wat je het leukste cadeau vindt: een cadeaubon of een weekendje weg.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 een weekendje weg.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 aankruisen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. een weekendje weg.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb aankruisen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "We gaan het cadeau geven dat het meest gekozen is door jullie.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 is door jullie.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. is door jullie.."
          }
        ]
      }
    },
    "Nadia is deze week nog gewoon aan het werk.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Ons cadeau moet natuurlijk wel een verrassing blijven.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Let er dus op dat je niets zegt tegen Nadia!": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 zegt tegen Nadia，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、dus 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. zegt tegen Nadia."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, dus. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Bij wie moet hij zich opgeven?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Bij（问句开头的变位动词）+ wie（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wie 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 hij zich opgeven，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 opgeven。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Bij = fin. verb at the start + wie = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wie. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. hij zich opgeven."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb opgeven. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Welk cadeau gaan de collega's samen geven aan Nadia en Richard?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Welk（疑问词/疑问成分）+ cadeau（变位动词）+ gaan（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Welk = question element + cadeau = fin. verb + gaan = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Waarom stuurt de feestcommissie deze e-mail vooral?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waarom（疑问词/疑问成分）+ stuurt（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waarom = question element + stuurt = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Op internet staat een folder met informatie over EHBO-cursussen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op internet（句首时间/地点/原因/宾语等成分）+ staat（变位动词）+ een（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op internet = fronted element + staat = fin. verb + een = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Als EHBO'er kunt u helpen als er een ongeluk gebeurt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 een ongeluk gebeurt.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. een ongeluk gebeurt.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Bijvoorbeeld als uw buurjongen valt en zijn arm breekt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 zijn arm breekt.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. zijn arm breekt.."
          }
        ]
      }
    },
    "Of als iemand zich snijdt bij het eten maken.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 het eten maken.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. het eten maken.."
          }
        ]
      }
    },
    "U kunt bij ons verschillende EHBO-cursussen volgen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 bij ons 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as bij ons. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U haalt uw diploma bij ons altijd in korte tijd.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 bij ons、altijd 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as bij ons, altijd. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dit is de algemene cursus 'EHBO'.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dit（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dit = fronted element + is = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "U leert om te helpen bij allerlei ongelukken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Bijvoorbeeld als iemand z'n been breekt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 z’n been breekt.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. z’n been breekt.."
          }
        ]
      }
    },
    "Maar u leert ook wat u moet doen bij andere problemen, zoals een bloedneus of brandwond.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 bloedneus of brandwond.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. bloedneus of brandwond.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U krijgt er een online cursusboek bij.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Aan het einde van de cursus doet u examen in de praktijk.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Aan het einde van de cursus（句首时间/地点/原因/宾语等成分）+ doet（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Aan het einde van de cursus = fronted element + doet = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Dit is de cursus 'Reanimeren'.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dit（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dit = fronted element + is = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Deze cursus kan u helpen om levens te redden!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 even 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as even. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U leert mensen met een hartstilstand of ademstilstand te helpen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 ademstilstand te helpen.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. ademstilstand te helpen.."
          }
        ]
      }
    },
    "U weet na de cursus precies wat u dan moet doen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 dan moet doen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. dan moet doen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U krijgt de gids 'Reanimatie' mee naar huis.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Dit is de cursus 'EHBO voor ouders'.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dit（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dit = fronted element + is = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Is een kind bijvoorbeeld gewond of ziek?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Is（问句开头的变位动词）+ een（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 gewond of ziek，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Is = fin. verb at the start + een = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. gewond of ziek."
          }
        ]
      }
    },
    "Deze cursus leert u hoe u dan kunt helpen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 hoe 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 dan kunt helpen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by hoe. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. dan kunt helpen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "De cursus is ook erg handig als u in het onderwijs werkt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 het onderwijs werkt.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. het onderwijs werkt.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Welke cursus is het meest geschikt voor Myra?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Welke（疑问词/疑问成分）+ cursus（变位动词）+ is（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Welke = question element + cursus = fin. verb + is = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "In hoeveel bijeenkomsten leert zij dat?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In（疑问词/疑问成分）+ hoeveel（变位动词）+ bijeenkomsten（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 从句连接词 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 leert zij dat，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In = question element + hoeveel = fin. verb + bijeenkomsten = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by subclause marker. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. leert zij dat."
          }
        ]
      }
    },
    "Welke cursus kan hij het beste kiezen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Welke（疑问词/疑问成分）+ cursus（变位动词）+ kan（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Welke = question element + cursus = fin. verb + kan = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "In de krant staat een tekst over Bartjes Kringloopcentrum.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In de krant（句首时间/地点/原因/宾语等成分）+ staat（变位动词）+ een（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In de krant = fronted element + staat = fin. verb + een = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "In Bartjes Kringloopcentrum is veel te koop.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In Bartjes Kringloopcentrum（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ veel（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 te koop。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In Bartjes Kringloopcentrum = fronted element + is = fin. verb + veel = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb te koop. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Gebruikte spullen of nieuwe spullen, altijd goed en goedkoop.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 goed en goedkoop.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 altijd 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. goed en goedkoop.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as altijd. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Er is altijd weer iets anders te koop.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 te koop。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 weer、altijd 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb te koop. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as weer, altijd. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat hebben we te koop?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ hebben（变位动词）+ we（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 te koop。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + hebben = fin. verb + we = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb te koop. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Wij kunnen ze ook gratis bij u thuis ophalen.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 ophalen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook、thuis 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb ophalen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook, thuis. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We nemen niet alles mee, alleen wat we kunnen verkopen in onze winkel.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 in onze winkel.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、alleen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. in onze winkel.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, alleen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat kapot is, proberen we te maken.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat kapot（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ proberen（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 we te maken.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat kapot = fronted element + is = fin. verb + proberen = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. we te maken.."
          }
        ]
      }
    },
    "Ook maken we alles schoon.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Ook（句首时间/地点/原因/宾语等成分）+ maken（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Ook = fronted element + maken = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Daarna zetten we de spullen te koop in onze winkel.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarna（句首时间/地点/原因/宾语等成分）+ zetten（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 te koop。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daarna、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarna = fronted element + zetten = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb te koop. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daarna, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als u spullen bij ons koopt, kunnen we ze bij u thuis afleveren.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u thuis afleveren.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 thuis、bij ons 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ kunnen（主句变位动词）+ we（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u thuis afleveren.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as thuis, bij ons. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + kunnen = main fin. verb + we = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "Daarvoor betaalt u 5 euro.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarvoor（句首时间/地点/原因/宾语等成分）+ betaalt（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarvoor = fronted element + betaalt = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat doen we met onze winst?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ doen（变位动词）+ we（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + doen = fin. verb + we = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "U krijgt geen geld voor uw spullen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Het geld dat we verdienen met de verkoop gaat naar een goed doel.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Het（句首时间/地点/原因/宾语等成分）+ geld（变位动词）+ dat（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 een goed doel.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Het = fronted element + geld = fin. verb + dat = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. een goed doel.."
          }
        ]
      }
    },
    "Elk jaar kiezen we een ander goed doel.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Elk jaar（句首时间/地点/原因/宾语等成分）+ kiezen（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Elk jaar = fronted element + kiezen = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Het goede doel is dit jaar kinderboerderij 'Het bokje'.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Hebt u spullen die u niet meer gebruikt?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hebt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 niet meer gebruikt，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、meer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hebt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. niet meer gebruikt."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, meer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hebt u kleren die u niet meer draagt?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hebt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 niet meer draagt，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、meer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hebt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. niet meer draagt."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, meer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Gooi ze niet weg!": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 weggooien。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb weggooien. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hebt u iets nodig voor weinig geld?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hebt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hebt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Koop het bij ons!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 bij ons 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as bij ons. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat doet Bartjes met de kapotte spullen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ doet（变位动词）+ Bartjes（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + doet = fin. verb + Bartjes = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Hoeveel moet hij dan betalen aan Bartjes?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoeveel（问句开头的变位动词）+ moet（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoeveel = fin. verb at the start + moet = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Waar gaat de winst van Bartjes dit jaar naartoe?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waar（疑问词/疑问成分）+ gaat（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waar = question element + gaat = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Dit zijn de regels voor als je je ziek meldt.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dit（句首时间/地点/原因/宾语等成分）+ zijn（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 je ziek meldt.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dit = fronted element + zijn = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. je ziek meldt.."
          }
        ]
      }
    },
    "Hoe meld ik mij ziek?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoe（疑问词/疑问成分）+ meld（变位动词）+ ik（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoe = question element + meld = fin. verb + ik = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "U meldt u telefonisch ziek bij uw werkgever.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 telefonisch 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as telefonisch. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dit doet u zo snel mogelijk, maar uiterlijk op het tijdstip dat uw werkdag begint.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dit（句首时间/地点/原因/宾语等成分）+ doet（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 uw werkdag begint.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dit = fronted element + doet = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. uw werkdag begint.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Als uw werkdag normaal bijvoorbeeld om 9 uur begint, meldt u zich uiterlijk om 9 uur ziek.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 9 uur ziek.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 om 9 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ meldt（主句变位动词）+ u（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. 9 uur ziek.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as om 9. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + meldt = main fin. verb + u = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "Wordt u onder werktijd ziek, dan meldt u dit meteen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wordt u onder werktijd ziek dan（句首时间/地点/原因/宾语等成分）+ meldt（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wordt u onder werktijd ziek dan = fronted element + meldt = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "In ieder geval voordat u naar huis gaat.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In ieder geval voordat u naar huis（句首时间/地点/原因/宾语等成分）+ gaat.（变位动词）+ （主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 voordat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 naar huis gaat.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In ieder geval voordat u naar huis = fronted element + gaat. = fin. verb +  = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by voordat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. naar huis gaat.."
          }
        ]
      }
    },
    "Wat vertel ik tijdens een ziekmelding?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ vertel（变位动词）+ ik（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + vertel = fin. verb + ik = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Waar hebt u last van?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waar（疑问词/疑问成分）+ hebt（变位动词）+ u（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waar = question element + hebt = fin. verb + u = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wat gaat u doen om zo snel mogelijk beter te worden?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ gaat（变位动词）+ u（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + gaat = fin. verb + u = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Wanneer kunt u weer werken, denkt u?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ kunt（变位动词）+ u（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + kunt = fin. verb + u = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Moeten uw collega's werk van u overnemen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Moeten（问句开头的变位动词）+ uw（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 overnemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Moeten = fin. verb at the start + uw = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb overnemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Dit zijn allemaal dingen die uw werkgever moet weten.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dit（句首时间/地点/原因/宾语等成分）+ zijn（变位动词）+ allemaal（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 werkgever moet weten.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dit = fronted element + zijn = fin. verb + allemaal = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. werkgever moet weten.."
          }
        ]
      }
    },
    "Ook is het belangrijk dat uw werkgever u kan bereiken.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Ook（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ het（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u kan bereiken.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Ook = fronted element + is = fin. verb + het = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u kan bereiken.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U spreekt tijdens het gesprek ook af wanneer u elkaar weer spreekt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 elkaar weer spreekt.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 afspreken。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook、weer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. elkaar weer spreekt.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb afspreken. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook, weer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Moet ik alle klachten aan mijn werkgever vertellen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Moet（问句开头的变位动词）+ ik（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Moet = fin. verb at the start + ik = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "U hoeft geen medische gegevens te geven.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen、even 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen, even. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als u privéproblemen hebt, hoeft u daar niets over te vertellen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 over te vertellen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ hoeft（主句变位动词）+ u（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. over te vertellen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + hoeft = main fin. verb + u = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "U moet wél vertellen waarom u niet kunt komen werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 waarom 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 kunt komen werken.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by waarom. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. kunt komen werken.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U kunt zeggen dat u om medische redenen of privéredenen niet kunt komen werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 kunt komen werken.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. kunt komen werken.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Meer hoeft u niet te zeggen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Meer（句首时间/地点/原因/宾语等成分）+ hoeft（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、meer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Meer = fronted element + hoeft = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, meer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat moet ze doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ ze（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + ze = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wat moet hij vertellen tijdens zijn ziekmelding?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ hij（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + hij = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "De praktijk is elke dag geopend van 8.30 tot 17.00 uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Op vrijdag en in het weekend zijn wij gesloten.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op vrijdag en in het weekend（句首时间/地点/原因/宾语等成分）+ zijn（变位动词）+ wij（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op vrijdag en in het weekend = fronted element + zijn = fin. verb + wij = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "U kunt onze receptie bellen van maandag tot en met donderdag van 9.00 tot 12.00 uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Op vrijdag zijn wij gesloten.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op vrijdag（句首时间/地点/原因/宾语等成分）+ zijn（变位动词）+ wij（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op vrijdag = fronted element + zijn = fin. verb + wij = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Heeft u zoveel pijn dat u direct geholpen moet worden?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Heeft（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 geholpen moet worden，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Heeft = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. geholpen moet worden."
          }
        ]
      }
    },
    "U kunt dan een spoedafspraak maken met de assistente op 06-35571209.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U kunt dan altijd dezelfde dag nog bij onze praktijk terecht.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、nog、zelf、altijd 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, nog, zelf, altijd. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Let op: Dit kan niet op vrijdag of in het weekend!": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 in het weekend，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. in het weekend."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Op vrijdag en in het weekend is de praktijk gesloten.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op vrijdag en in het weekend（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op vrijdag en in het weekend = fronted element + is = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Heeft u veel pijn en kunt u niet wachten tot maandag?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Heeft（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Heeft = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U kunt dan bellen met het noodnummer: 070 – 3608814.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat is een cv?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ is（变位动词）+ een（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + is = fin. verb + een = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Uw curriculum vitae (cv) stuurt u op als u solliciteert naar een baan.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 naar een baan.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. naar een baan.."
          }
        ]
      }
    },
    "In uw cv staat wie u bent en wat u kunt.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In uw cv（句首时间/地点/原因/宾语等成分）+ staat（变位动词）+ wie（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 wat u kunt.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In uw cv = fronted element + staat = fin. verb + wie = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. wat u kunt.."
          }
        ]
      }
    },
    "Hoe maakt u een cv?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoe（疑问词/疑问成分）+ maakt（变位动词）+ u（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoe = question element + maakt = fin. verb + u = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Hier zet u uw naam, adres, telefoon, e-mailadres, geboortedatum.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hier（句首时间/地点/原因/宾语等成分）+ zet（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hier = fronted element + zet = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Hier zet u alle opleidingen en cursussen die u hebt gedaan.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hier（句首时间/地点/原因/宾语等成分）+ zet（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u hebt gedaan.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hier = fronted element + zet = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u hebt gedaan.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Hier schrijft u het werk dat u gedaan heeft.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hier（句首时间/地点/原因/宾语等成分）+ schrijft（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u gedaan heeft.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hier = fronted element + schrijft = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u gedaan heeft.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Dus ook vrijwilligerswerk en stages.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook、dus 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook, dus. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Schrijf hier ook wat u allemaal op uw werk moest doen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 werk moest doen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. werk moest doen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hier zet u alle andere dingen die belangrijk zijn.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hier（句首时间/地点/原因/宾语等成分）+ zet（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 die belangrijk zijn.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hier = fronted element + zet = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. die belangrijk zijn.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Waarom maakt Anna een cv?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waarom（疑问词/疑问成分）+ maakt（变位动词）+ Anna（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waarom = question element + maakt = fin. verb + Anna = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Waar moet ze dat op haar cv zetten?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waar（疑问词/疑问成分）+ moet（变位动词）+ ze（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 haar cv zetten，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waar = question element + moet = fin. verb + ze = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. haar cv zetten."
          }
        ]
      }
    },
    "Op vakantie?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op（疑问词/疑问成分）+ vakantie（变位动词）+ （主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op = question element + vakantie = fin. verb +  = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Gaat u buiten de vakantieperiode om op vakantie?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Gaat（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Gaat = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Vertel dit dan aan uw docent.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dit moet u uiterlijk 2 weken vóór uw vakantie schriftelijk doen": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dit（句首时间/地点/原因/宾语等成分）+ moet（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dit = fronted element + moet = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Bent u ziek en kunt u niet naar de les komen, bel dan met de administratie van de talenschool.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U moet dit zo snel mogelijk doen, uiterlijk een uur voordat de les begint.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 voordat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 de les begint.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by voordat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. de les begint.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Op deze dagen zijn er geen lessen op de talenschool.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op deze dagen（句首时间/地点/原因/宾语等成分）+ zijn（变位动词）+ er（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op deze dagen = fronted element + zijn = fin. verb + er = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als u het leuk vindt, kunt u helpen tijdens de open dagen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 de open dagen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ kunt（主句变位动词）+ u（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. de open dagen.."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + kunt = main fin. verb + u = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "U kunt bijvoorbeeld informatie geven aan mensen die een talencursus willen volgen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 talencursus willen volgen.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. talencursus willen volgen.."
          }
        ]
      }
    },
    "Zij vinden het leuk om te horen wat u van de talenschool vindt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 de talenschool vindt.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. de talenschool vindt.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Nieuwe cursisten komen ook vaak naar de open dagen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wilt u helpen tijdens de open dagen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Zeg dit dan tegen uw docent of tegen de administratie.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 tegen de administratie.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. tegen de administratie.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat moet zij doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ zij（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + zij = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wat kan hij donderdag 26 januari op de talenschool doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ kan（变位动词）+ hij（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + kan = fin. verb + hij = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wanneer kan zij naar een open dag?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ kan（变位动词）+ zij（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + kan = fin. verb + zij = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Als u ziek bent en niet kunt komen werken, moet u dit bij uw leidinggevende melden.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 uw leidinggevende melden.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、even 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ moet（主句变位动词）+ u（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. uw leidinggevende melden.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, even. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + moet = main fin. verb + u = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "U hoeft niet te vertellen waar u last van heeft.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wel moet u zeggen hoe lang u denkt ziek te zijn.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 hoe 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 ziek te zijn.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by hoe. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. ziek te zijn.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U kunt haar bellen vanaf 7:00 uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "U moet Chantal altijd voor 9:30 uur bellen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 altijd 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as altijd. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als u Chantal niet kunt bereiken, dan kunt u bellen met Jaap van Bommel.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 Jaap van Bommel.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ dan（主句变位动词）+ kunt（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. Jaap van Bommel.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + dan = main fin. verb + kunt = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "U kunt altijd een afspraak maken met de bedrijfsarts.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 altijd 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as altijd. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als u langer dan zes weken ziek bent, krijgt u een uitnodiging van onze bedrijfsarts.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 van onze bedrijfsarts.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ krijgt（主句变位动词）+ u（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. van onze bedrijfsarts.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + krijgt = main fin. verb + u = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "Hij gaat samen met u kijken hoe u weer beter kunt worden.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 hoe 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 beter kunt worden.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 weer、samen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by hoe. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. beter kunt worden.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as weer, samen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hoe laat kan ze bellen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoe（疑问词/疑问成分）+ laat（变位动词）+ kan（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoe = question element + laat = fin. verb + kan = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wanneer kan dat?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ kan（变位动词）+ dat（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 Wanneer kan dat，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + kan = fin. verb + dat = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. Wanneer kan dat."
          }
        ]
      }
    },
    "Er is nu een speeltuin voor de kinderen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "We zullen dan met elkaar praten over de veranderingen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We zullen ook de plannen voor volgend jaar bespreken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "20:15 uur: Film over wat we gedaan hebben in de wijk": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 in de wijk，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. in de wijk."
          }
        ]
      }
    },
    "21:00 uur: Themagroepen (zie hieronder)": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 hieronder 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as hieronder. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wilt u komen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Laat dat dan vóór 23 november weten aan het buurtcomité.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 aan het buurtcomité.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. aan het buurtcomité.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hoe laat kan hij het beste komen om over de sportlessen te praten?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoe（疑问词/疑问成分）+ laat（变位动词）+ kan（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoe = question element + laat = fin. verb + kan = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Wanneer moet ze zich opgeven?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ moet（变位动词）+ ze（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 opgeven。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + moet = fin. verb + ze = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb opgeven. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Werkdagen van 08.00 uur tot 22.00 uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Werkdagen（句首时间/地点/原因/宾语等成分）+ van（变位动词）+ 08.00（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Werkdagen = fronted element + van = fin. verb + 08.00 = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Zaterdag en zondag van 09.00 uur tot 17.00 uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Zaterdag（句首时间/地点/原因/宾语等成分）+ en（变位动词）+ zondag（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Zaterdag = fronted element + en = fin. verb + zondag = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Er zijn drie soorten abonnementen:": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "op werkdagen sporten tot 17.00 uur": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "vanaf vrijdagmiddag 17.00 uur": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "U kunt zich aanmelden bij het sportcentrum.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 aanmelden。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb aanmelden. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Tot hoe laat kan hij op dinsdag sporten?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Tot（疑问词/疑问成分）+ hoe（变位动词）+ laat（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 hoe 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 op dinsdag sporten，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Tot = question element + hoe = fin. verb + laat = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by hoe. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. op dinsdag sporten."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Hij krijgt een baan in het weekend, dan moet hij van 9 tot 5 uur werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wanneer kan Ali nog sporten?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ kan（变位动词）+ Ali（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + kan = fin. verb + Ali = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Ik heb geleerd om de Nederlandse taal echt te gebruiken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "En ik kan het nu ook veel beter.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Ik praatte eigenlijk nooit met Nederlanders.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Ik vind het nog steeds moeilijk en maak nog steeds fouten, maar ik doe het nu wel.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Mijn man heeft me wel geholpen bij deze brief.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Het is belangrijk dat ik blijf oefenen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 ik blijf oefenen.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. ik blijf oefenen.."
          }
        ]
      }
    },
    "Dat doe ik door de taal gewoon te gebruiken.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 gewoon te gebruiken.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. gewoon te gebruiken.."
          }
        ]
      }
    },
    "Soms willen mijn man of mijn kinderen me helpen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 kinderen me helpen.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. kinderen me helpen.."
          }
        ]
      }
    },
    "Als ik hun hulp nodig heb, dan vraag ik het wel.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 ik het wel.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ dan（主句变位动词）+ vraag（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. ik het wel.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + dan = main fin. verb + vraag = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "Het is jammer dat ik alles in één jaar moest leren.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 jaar moest leren.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. jaar moest leren.."
          }
        ]
      }
    },
    "Wat heeft Samira van Yvonne geleerd?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ heeft（变位动词）+ Samira（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + heeft = fin. verb + Samira = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Toch vindt ze niet alles goed.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat vindt ze niet zo goed?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ vindt（变位动词）+ ze（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + vindt = fin. verb + ze = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wij zijn open van maandag tot en met donderdag van 08:00 tot 17:00 uur en op vrijdag van 08:00 tot 12:30 uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Op avonden, in het weekend en op vrijdagmiddag kunt u de centrale huisartsenpost bellen (0900 2233333).": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op（句首时间/地点/原因/宾语等成分）+ avonden（变位动词）+ in（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op = fronted element + avonden = fin. verb + in = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Zij geven u telefonisch advies.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 even、telefonisch 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as even, telefonisch. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als het nodig is, kunt u een afspraak maken voor een bezoek.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 voor een bezoek.，所以和英文自然语序不同。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ kunt（主句变位动词）+ u（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. voor een bezoek.."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + kunt = main fin. verb + u = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "Deze informatie staat ook op onze website: www.uwhuisarts.nl.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hier kunt u ook vinden wie uw huisarts vervangt tijdens vakanties.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hier（句首时间/地点/原因/宾语等成分）+ kunt（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wie 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 vervangt tijdens vakanties.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hier = fronted element + kunt = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wie. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. vervangt tijdens vakanties.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als u bij een noodgeval niemand direct kunt bereiken, belt u dan het alarmnummer (112).": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 alarmnummer 112 .，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ belt（主句变位动词）+ u（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. alarmnummer 112 .."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + belt = main fin. verb + u = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "U kunt dat bij ons aan de balie doen of telefonisch: 031 2850127.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 telefonisch 031 2850127.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 bij ons、telefonisch 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. telefonisch 031 2850127.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as bij ons, telefonisch. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Voor kort overleg en uitslagen (bijvoorbeeld na bloed prikken) kunt u de assistente bellen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Voor（句首时间/地点/原因/宾语等成分）+ kort（变位动词）+ overleg（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Voor = fronted element + kort = fin. verb + overleg = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Dat kan van maandag tot en met donderdag van 13:30 tot 14:30 uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 14 30 uur.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. 14 30 uur.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Ons adres en ons telefoonnummer kunt u ook vinden in het weekblad.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat is de beste tijd om de huisarts te bellen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ is（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + is = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Wat moet Mouna doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ Mouna（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + Mouna = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Kent u nog bijna geen woorden in de taal die u wilt leren?": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u wilt leren，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen、nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u wilt leren."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen, nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dan is dit een goede manier.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ dit（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + is = fin. verb + dit = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U schrijft op elk kaartje een woord dat u moet leren.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u moet leren.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u moet leren.."
          }
        ]
      }
    },
    "Op de achterkant van het kaartje schrijft u wat het woord in uw eigen taal betekent.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op（句首时间/地点/原因/宾语等成分）+ de（变位动词）+ achterkant（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 eigen taal betekent.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op = fronted element + de = fin. verb + achterkant = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. eigen taal betekent.."
          }
        ]
      }
    },
    "U kijkt bij elk woord of u weet wat het woord betekent.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 het woord betekent.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. het woord betekent.."
          }
        ]
      }
    },
    "Dan legt u het kaartje op de stapel 'goed'.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ legt（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + legt = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Weet u het niet?": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dan legt u het kaartje op de stapel 'fout'.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ legt（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + legt = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U pakt daarna de stapel 'fout' opnieuw.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daarna、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daarna, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U doet weer hetzelfde als bij stap 2.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 bij stap 2.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 weer、zelf 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. bij stap 2.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as weer, zelf. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U doet stap 2 en stap 3 net zo lang tot de stapel 'fout' weg is.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Heeft u het altijd druk?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Heeft（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Heeft = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "De schuifmethode is een snelle manier om woorden te leren.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "U legt een papier op de woordenlijst die u moet leren.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u moet leren.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u moet leren.."
          }
        ]
      }
    },
    "U schuift dit papier naar beneden, zodat u alleen het woord ziet dat u wilt leren.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u wilt leren.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 alleen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u wilt leren.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as alleen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U schrijft daarna het woord op.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daarna、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daarna, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U kijkt of u het woord goed geschreven heeft.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 goed geschreven heeft.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. goed geschreven heeft.."
          }
        ]
      }
    },
    "Leer ze niet alleen van boven naar beneden, maar ook van beneden naar boven en door elkaar.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook、niet、alleen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook, niet, alleen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U leert daarna de volgende 8 woorden en u herhaalt de eerste 8 woorden.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daarna、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daarna, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Maak dan een 'woordnet' voor elk moeilijk woord.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U zet daaromheen allemaal woorden die iets te maken hebben met het moeilijke woord.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 het moeilijke woord.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. het moeilijke woord.."
          }
        ]
      }
    },
    "Karima gebruikt de schuifmethode om woorden te leren.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Welke manier is dan het beste?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Welke（疑问词/疑问成分）+ manier（变位动词）+ is（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Welke = question element + manier = fin. verb + is = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "N nachtdienst van 23.00 uur tot 07.30 uur": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "O ochtenddienst van 7.30 uur tot 14.00 uur": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "M middagdienst van 14.00 uur tot 18.30 uur": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "A avonddienst van 18.30 uur tot 23.00 uur": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Wil je een dienst ruilen met een collega?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wil（问句开头的变位动词）+ je（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wil = fin. verb at the start + je = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Dan moet je dat zelf regelen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ moet（变位动词）+ je（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 dat zelf regelen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、zelf 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + moet = fin. verb + je = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. dat zelf regelen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, zelf. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Kijk eerst op het rooster wie van je collega's kan.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wie 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 je collega’s kan.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wie. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. je collega’s kan.."
          }
        ]
      }
    },
    "Je mag altijd twee diensten achter elkaar werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 altijd 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as altijd. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Let op: als je nachtdienst hebt (gehad), mag dat niet": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 mag dat niet，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. mag dat niet."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hoe lang moet Xavier vrijdag werken?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoe（疑问词/疑问成分）+ lang（变位动词）+ moet（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoe = question element + lang = fin. verb + moet = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Met wie kan Xavier ruilen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Met（问句开头的变位动词）+ wie（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wie 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 kan Xavier ruilen，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Met = fin. verb at the start + wie = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wie. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. kan Xavier ruilen."
          }
        ]
      }
    },
    "Dat was goed om te doen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 om te doen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. om te doen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "De afspraken staan hieronder:": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 hieronder 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as hieronder. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "De winkel is vanaf nu elke eerste en derde zondag van de maand open.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Op de andere zondagen is de winkel dicht.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op de andere zondagen（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op de andere zondagen = fronted element + is = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Omar en Moniek werken niet op zondag.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We hebben vanaf 1 maart een nieuwe klantenkaart.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Klanten mogen hun oude klantenkaart dan niet meer gebruiken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、niet、meer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, niet, meer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "De oude kaart kostte €5,- , maar de nieuwe klantenkaart is gratis!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "We vertellen de klant ook over het sparen met de nieuwe kaart.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Bij elke €10,- krijgt de klant één punt.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Bij elke 10（句首时间/地点/原因/宾语等成分）+ krijgt（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Bij elke 10 = fronted element + krijgt = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Bij tien punten krijgt de klant €15,- korting.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Bij tien punten（句首时间/地点/原因/宾语等成分）+ krijgt（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Bij tien punten = fronted element + krijgt = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "We deden dit tot nu toe altijd één keer per week, maar het is nu wel erg vaak vies.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 altijd、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as altijd, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Is het druk geweest in de winkel?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Is（问句开头的变位动词）+ het（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Is = fin. verb at the start + het = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Dan dweilen we nog een derde keer.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ dweilen（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + dweilen = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Heb je nog vragen?": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hoeveel kost de nieuwe klantenkaart?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoeveel（问句开头的变位动词）+ kost（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoeveel = fin. verb at the start + kost = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Hoe vaak moeten Omar en zijn collega's dweilen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoe（疑问词/疑问成分）+ vaak（变位动词）+ moeten（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoe = question element + vaak = fin. verb + moeten = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Op 1 mei wordt hij namelijk 67 jaar.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op（句首时间/地点/原因/宾语等成分）+ 1（变位动词）+ mei（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op = fronted element + 1 = fin. verb + mei = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Hij stopt dan met werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Op woensdag 18 april geeft hij zijn laatste les Nederlands en op donderdag 19 april zijn laatste les Engels.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op woensdag 18 april（句首时间/地点/原因/宾语等成分）+ geeft（变位动词）+ hij（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op woensdag 18 april = fronted element + geeft = fin. verb + hij = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Daarna geeft Nadia Luiten de lessen Nederlands.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarna（句首时间/地点/原因/宾语等成分）+ geeft（变位动词）+ Nadia（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daarna、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarna = fronted element + geeft = fin. verb + Nadia = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daarna, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dat is heel bijzonder.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 is heel bijzonder.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. is heel bijzonder.."
          }
        ]
      }
    },
    "Daarom geven we een groot feest voor hem.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarom（句首时间/地点/原因/宾语等成分）+ geven（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarom = fronted element + geven = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Het begint om 20.00 uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Daarvan hebben we een bijzonder boek voor Harry gekocht.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarvan（句首时间/地点/原因/宾语等成分）+ hebben（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarvan = fronted element + hebben = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Willen jullie ook iets doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Willen（问句开头的变位动词）+ jullie（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Willen = fin. verb at the start + jullie = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Schrijf dan iets voor Harry.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hij maakt er een boek van.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Kom je ook afscheid nemen van Harry?": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We hopen dat het een gezellig feest wordt!": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 gezellig feest wordt，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. gezellig feest wordt."
          }
        ]
      }
    },
    "Wanneer is de laatste les Nederlands van Harry de Bont?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ is（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + is = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Van wie krijgt Irena straks Nederlandse les?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Van（问句开头的变位动词）+ wie（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wie 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 straks Nederlandse les，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Van = fin. verb at the start + wie = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wie. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. straks Nederlandse les."
          }
        ]
      }
    },
    "Waarom wordt de stadsbus gratis?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waarom（疑问词/疑问成分）+ wordt（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waarom = question element + wordt = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Er rijden steeds meer auto's en er is vaak niet genoeg plek om te parkeren.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、meer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, meer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Daarom wordt de stadsbus gratis tijdens drukke winkeltijden.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarom（句首时间/地点/原因/宾语等成分）+ wordt（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarom = fronted element + wordt = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We hopen dat het dan minder druk wordt in de stad.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 in de stad.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. in de stad.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wanneer is de stadsbus gratis?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ is（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + is = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "De stadsbus gaat gratis rijden vanaf 1 september.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Het gaat om deze dagen en tijden:": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Maandag tot en met donderdag betaalt u de hele dag voor de stadsbus.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Maandag tot en met donderdag（句首时间/地点/原因/宾语等成分）+ betaalt（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Maandag tot en met donderdag = fronted element + betaalt = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Wanneer rijdt de stadsbus?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ rijdt（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + rijdt = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "De stadsbus rijdt van 08.00 tot 22.00 uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Op werkdagen vertrekt de bus elke twintig minuten vanaf het station.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op（句首时间/地点/原因/宾语等成分）+ werkdagen（变位动词）+ vertrekt（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op = fronted element + werkdagen = fin. verb + vertrekt = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Op zaterdag rijdt de bus elke tien minuten.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op zaterdag（句首时间/地点/原因/宾语等成分）+ rijdt（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op zaterdag = fronted element + rijdt = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Na 18.00 uur rijdt de bus nog elk kwartier.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Na 18.00 uur（句首时间/地点/原因/宾语等成分）+ rijdt（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Na 18.00 uur = fronted element + rijdt = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Op zondag rijdt de bus elke dertig minuten.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op zondag（句首时间/地点/原因/宾语等成分）+ rijdt（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op zondag = fronted element + rijdt = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Waarom maakt de gemeente de stadsbus gratis?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waarom（疑问词/疑问成分）+ maakt（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waarom = question element + maakt = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Hoe vaak gaat de bus die dag?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoe（疑问词/疑问成分）+ vaak（变位动词）+ gaat（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 hoe 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 bus die dag，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoe = question element + vaak = fin. verb + gaat = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by hoe. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. bus die dag."
          }
        ]
      }
    },
    "Op 3 juli was er een buurtvergadering.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op 3 juli（句首时间/地点/原因/宾语等成分）+ was（变位动词）+ er（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op 3 juli = fronted element + was = fin. verb + er = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Stuur het dan op!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat moet je doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ je（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + je = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Schrijf op wanneer jouw activiteit is: is het overdag, 's avonds of de hele dag?": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 de hele dag，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. de hele dag."
          }
        ]
      }
    },
    "Vorig jaar kostte de activiteit € 25,- per persoon.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Vorig（句首时间/地点/原因/宾语等成分）+ jaar（变位动词）+ kostte（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Vorig = fronted element + jaar = fin. verb + kostte = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Veel mensen vonden dat te duur.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 dat te duur.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. dat te duur.."
          }
        ]
      }
    },
    "Daarom mag de activiteit dit jaar maximaal € 15,- per persoon kosten.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarom（句首时间/地点/原因/宾语等成分）+ mag（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarom = fronted element + mag = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als je ook wilt eten met zijn allen mag het iets duurder zijn.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 iets duurder zijn.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. iets duurder zijn.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dan is het maximaal € 20,- per persoon.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ het（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + is = fin. verb + het = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Doe dat voor 1 augustus.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 voor 1 augustus.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. voor 1 augustus.."
          }
        ]
      }
    },
    "We hopen dat we uit veel ideeën kunnen kiezen!": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 ideeën kunnen kiezen，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. ideeën kunnen kiezen."
          }
        ]
      }
    },
    "Wat is het belangrijkst aan de activiteit?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ is（变位动词）+ het（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + is = fin. verb + het = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Voor wanneer moet ze haar idee opsturen?": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 haar idee opsturen，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. haar idee opsturen."
          }
        ]
      }
    },
    "Hoe duur mag die activiteit maximaal zijn?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoe（疑问词/疑问成分）+ duur（变位动词）+ mag（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 hoe 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 activiteit maximaal zijn，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoe = question element + duur = fin. verb + mag = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by hoe. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. activiteit maximaal zijn."
          }
        ]
      }
    },
    "Ook onze tweede winkel in Amsterdam-Oost groeit hard.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Ook（句首时间/地点/原因/宾语等成分）+ onze（变位动词）+ tweede（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Ook = fronted element + onze = fin. verb + tweede = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We zoeken daarom nog goede verkopers voor deze winkel.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Er zijn zelfs plannen voor een nieuwe winkel, in Amsterdam-Zuid!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 zelf 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as zelf. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Je helpt alle klanten vriendelijk en je zorgt dat iedereen tevreden naar huis gaat.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 naar huis gaat.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. naar huis gaat.."
          }
        ]
      }
    },
    "We zoeken verkopers die 16 tot 24 uur kunnen werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 uur kunnen werken.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. uur kunnen werken.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Je bent ook op zaterdag beschikbaar.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Je hoeft niet veel van mode te weten, maar je moet wel van kleding houden.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Ervaring met werken in een kledingwinkel is een voordeel, maar is niet verplicht.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Het belangrijkste is dat je goed met kinderen kunt omgaan.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 kinderen kunt omgaan.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. kinderen kunt omgaan.."
          }
        ]
      }
    },
    "Dan ben jij de verkoper die we zoeken!": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ ben（变位动词）+ jij（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 die we zoeken，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + ben = fin. verb + jij = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. die we zoeken."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Voor welke winkel zoekt Nino's nog mensen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Voor（疑问词/疑问成分）+ welke（变位动词）+ winkel（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Voor = question element + welke = fin. verb + winkel = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Voor wanneer zoekt Nino's nog mensen?": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 Nino’s nog mensen，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. Nino’s nog mensen."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Welke stad kiezen wij?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Welke（疑问词/疑问成分）+ stad（变位动词）+ kiezen（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Welke = question element + stad = fin. verb + kiezen = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Ik heb daar een jaar gewoond, het is echt een leuke stad.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Kun jij dan iets zoeken over de geschiedenis van de stad?": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dat vind jij niet erg, toch?": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We moeten ook iets vertellen over de winkels en restaurants.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Daarover zoeken we dan wel samen informatie.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarover（句首时间/地点/原因/宾语等成分）+ zoeken（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、samen、daar、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarover = fronted element + zoeken = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, samen, daar, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Zullen we nog een keer afspreken?": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 afspreken。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb afspreken. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dan kunnen we de presentatie oefenen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ kunnen（变位动词）+ we（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + kunnen = fin. verb + we = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Ik kan woensdag wel, bij mij thuis.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 thuis、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as thuis, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Donderdag kan het niet bij mij.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Mijn man heeft dan bezoek.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We kunnen wel na de les in de mediatheek zitten.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Vrijdag moet ik werken, dus dan kan ik helemaal niet.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、niet、dus 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, niet, dus. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Laat je me weten wanneer jij kunt?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Laat（问句开头的变位动词）+ je（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 wanneer jij kunt，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Laat = fin. verb at the start + je = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. wanneer jij kunt."
          }
        ]
      }
    },
    "Wanneer kan Chang bij Sasha thuis oefenen voor de presentatie?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ kan（变位动词）+ Chang（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 thuis 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + kan = fin. verb + Chang = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as thuis. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hij moet volgende week twee dagen werken, maar dat gaat nu niet.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 gaat nu niet.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. gaat nu niet.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dus ik zoek mensen die extra dagen kunnen werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 dagen kunnen werken.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dus 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. dagen kunnen werken.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dus. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Zij kan daarom maar één dag extra werken: op woensdag.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Het zou fijn zijn als je kunt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 als je kunt.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. als je kunt.."
          }
        ]
      }
    },
    "Laat je me dat vóór vrijdag even weten?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Laat（问句开头的变位动词）+ je（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 vrijdag even weten，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Laat = fin. verb at the start + je = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. vrijdag even weten."
          }
        ]
      }
    },
    "Coen vraagt of Selina extra kan werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 extra kan werken.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. extra kan werken.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Voor wie moet Selina werken?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Voor（疑问词/疑问成分）+ wie（变位动词）+ moet（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wie 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 moet Selina werken，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Voor = question element + wie = fin. verb + moet = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wie. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. moet Selina werken."
          }
        ]
      }
    },
    "Selina kan volgende week extra werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Hoeveel dagen moet ze dan extra werken?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoeveel（问句开头的变位动词）+ dagen（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoeveel = fin. verb at the start + dagen = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wanneer moet Selina iets laten weten aan Coen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ moet（变位动词）+ Selina（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + moet = fin. verb + Selina = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "De eerste les is op 18 juni van 10.00 uur tot 15.00 uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Wij zorgen voor de lunch en koffie of thee.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 koffie of thee.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. koffie of thee.."
          }
        ]
      }
    },
    "Het enige wat u moet meenemen, is het theorieboek van de cursus.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 van de cursus.，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. van de cursus.."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Dat kunt u online bestellen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 u online bestellen.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. u online bestellen.."
          }
        ]
      }
    },
    "Verder hebben wij alles wat u nodig hebt voor de cursus.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 voor de cursus.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. voor de cursus.."
          }
        ]
      }
    },
    "U kunt uw eigen gereedschap dus thuis laten!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dus、thuis 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dus, thuis. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "In de eerste les leert u welke soorten hout er zijn en wat u daarmee kunt maken.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In de eerste les（句首时间/地点/原因/宾语等成分）+ leert（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 daarmee kunt maken.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In de eerste les = fronted element + leert = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. daarmee kunt maken.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "In de lessen daarna gaat u zelf werken met verschillende gereedschappen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In de lessen daarna（句首时间/地点/原因/宾语等成分）+ gaat（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daarna、zelf、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In de lessen daarna = fronted element + gaat = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daarna, zelf, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "In de tweede les begint u met het maken van een klein kistje.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In de tweede les（句首时间/地点/原因/宾语等成分）+ begint（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In de tweede les = fronted element + begint = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "En in de lessen erna gaat u uw eigen meubelstuk ontwerpen en maken, bijvoorbeeld een stoel of tafeltje!": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 stoel of tafeltje，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. stoel of tafeltje."
          }
        ]
      }
    },
    "U kunt ook mailen naar meubelmakers@home.nl.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hebt u zich ingeschreven, maar kunt u niet naar de les komen of bent u later?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hebt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 bent u later，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、even 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hebt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. bent u later."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, even. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Bel dan onze receptie: 023-3691117.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Zij melden u dan af bij de docent.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat moet Abid meenemen naar de cursus?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ Abid（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + Abid = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Wat gaan de cursisten in de eerste les doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ gaan（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + gaan = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Abid kan niet op tijd in de les zijn.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U hebt op dinsdag 4 oktober om 14.00 uur een afspraak bij tandarts Altman.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Wilt u liever naar een andere tandarts?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Dat kan.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 Dat kan.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. Dat kan.."
          }
        ]
      }
    },
    "Meld dit dan bij ons.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、bij ons 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, bij ons. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Het tijdstip van de afspraak (14.00 uur) blijft hetzelfde.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Het（句首时间/地点/原因/宾语等成分）+ tijdstip（变位动词）+ van（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Het = fronted element + tijdstip = fin. verb + van = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Kunt u dan niet?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Kunt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Kunt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wij hopen dat we u voldoende hebben geïnformeerd.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 voldoende hebben geïnformeerd.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. voldoende hebben geïnformeerd.."
          }
        ]
      }
    },
    "Waarom is de afspraak van Mia verplaatst?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waarom（疑问词/疑问成分）+ is（变位动词）+ de（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waarom = question element + is = fin. verb + de = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wanneer heeft Mia een nieuwe afspraak?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ heeft（变位动词）+ Mia（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + heeft = fin. verb + Mia = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Je hebt je zomervakantie nog niet aangevraagd.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wil je dat deze week doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wil（问句开头的变位动词）+ je（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 deze week doen，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wil = fin. verb at the start + je = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. deze week doen."
          }
        ]
      }
    },
    "Dan kan ik een nieuwe planning voor de vakantieperiode maken.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ kan（变位动词）+ ik（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + kan = fin. verb + ik = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "In het rooster kun je zien wie wanneer al vakantie heeft.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In（句首时间/地点/原因/宾语等成分）+ het（变位动词）+ rooster（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 al vakantie heeft.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In = fronted element + het = fin. verb + rooster = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. al vakantie heeft.."
          }
        ]
      }
    },
    "Vergeet ook de vakantieregels niet:": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook、niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook, niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Je mag twee weken achter elkaar vrij nemen, maar het mogen ook twee losse weken zijn.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Er is altijd iemand nodig aan de balie én iemand om de telefoon op te nemen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 altijd 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as altijd. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Er moeten dus altijd twee collega's aan het werk zijn.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dus、altijd 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dus, altijd. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Zorg ervoor dat je geen belangrijk werk hebt in de weken waarin je vakantie wilt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 je vakantie wilt.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. je vakantie wilt.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Vanaf week 35 wordt het weer druk.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Vanaf（句首时间/地点/原因/宾语等成分）+ week（变位动词）+ 35（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 weer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Vanaf = fronted element + week = fin. verb + 35 = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as weer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dan moet iedereen weer aan het werk zijn.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ moet（变位动词）+ iedereen（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、weer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + moet = fin. verb + iedereen = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, weer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Waarom stuurt Pascal deze e-mail?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waarom（疑问词/疑问成分）+ stuurt（变位动词）+ Pascal（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waarom = question element + stuurt = fin. verb + Pascal = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Waarom moeten er altijd twee collega's aan het werk zijn in de zomer?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waarom（疑问词/疑问成分）+ moeten（变位动词）+ er（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waarom = question element + moeten = fin. verb + er = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wanneer kan Lito het beste vakantie nemen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ kan（变位动词）+ Lito（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + kan = fin. verb + Lito = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Misschien hebben jullie het al gehoord: vanaf volgende maand is onze winkel langer open.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "We zijn dan iedere dag open tot 20.00 uur!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "De reden voor deze verandering is simpel: andere winkels zijn ook langer open.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Omdat we langer open zijn, zoek ik ook mensen die meer willen werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 meer willen werken.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook、meer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. meer willen werken.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook, meer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Laten jullie mij weten of jullie extra willen werken?": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 extra willen werken，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. extra willen werken."
          }
        ]
      }
    },
    "Dat hoor ik graag vóór dinsdag.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 graag vóór dinsdag.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. graag vóór dinsdag.."
          }
        ]
      }
    },
    "Dan kan ik het nieuwe rooster gaan maken.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ kan（变位动词）+ ik（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + kan = fin. verb + ik = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Je hoeft natuurlijk niet meer te werken, als je dat niet wilt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 dat niet wilt.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、meer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. dat niet wilt.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, meer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als jullie vragen hebben, kunnen jullie ze dan stellen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 ze dan stellen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ kunnen（主句变位动词）+ jullie（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. ze dan stellen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + kunnen = main fin. verb + jullie = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "We kunnen dan het nieuwe rooster bespreken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We gaan dan ook samen kijken wie misschien andere taken moet doen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wie 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 taken moet doen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、ook、samen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wie. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. taken moet doen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, ook, samen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dat is misschien wel nodig, als jullie werktijden veranderen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 jullie werktijden veranderen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. jullie werktijden veranderen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat moet Halil aan Theo laten weten?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ Halil（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + Halil = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Op welke dag is dat?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op（疑问词/疑问成分）+ welke（变位动词）+ dag（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 从句连接词 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 dag is dat，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op = question element + welke = fin. verb + dag = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by subclause marker. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. dag is dat."
          }
        ]
      }
    },
    "In deze cursus leert u over verschillende machines.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In deze cursus（句首时间/地点/原因/宾语等成分）+ leert（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In deze cursus = fronted element + leert = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "U leert hoe ze werken en hoe u ze kunt repareren.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 hoe 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 ze kunt repareren.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by hoe. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. ze kunt repareren.."
          }
        ]
      }
    },
    "Deze cursus is vooral voor mensen die niet veel kennis hebben van techniek.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 hebben van techniek.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. hebben van techniek.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wilt u graag een baan in de techniek?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Dan kunt u ook een opleiding Algemene Techniek bij ons volgen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ kunt（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、ook、bij ons 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + kunt = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, ook, bij ons. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Daarvoor moet u wel al wat weten van techniek.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarvoor（句首时间/地点/原因/宾语等成分）+ moet（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 weten van techniek.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarvoor = fronted element + moet = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. weten van techniek.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U kunt een cursus volgen in Amsterdam of Den Haag.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 of Den Haag.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. of Den Haag.."
          }
        ]
      }
    },
    "Hieronder ziet u wanneer de lessen starten.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hieronder（句首时间/地点/原因/宾语等成分）+ ziet（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 de lessen starten.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 hieronder 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hieronder = fronted element + ziet = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. de lessen starten.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as hieronder. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wilt u zich inschrijven voor de cursus?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Ga dan naar www.techniekcursus.nl.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U kunt op de website ook een folder downloaden.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 downloaden。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb downloaden. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Daarin ziet u een overzicht van al onze cursussen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarin（句首时间/地点/原因/宾语等成分）+ ziet（变位动词）+ u（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarin = fronted element + ziet = fin. verb + u = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hebt u vragen over de cursus of over de verschillende lessen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hebt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 de verschillende lessen，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hebt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. de verschillende lessen."
          }
        ]
      }
    },
    "Bel ons dan: 070 - 365 2211.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Voor wie is de cursus Techniek bedoeld?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Voor（疑问词/疑问成分）+ wie（变位动词）+ is（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wie 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 cursus Techniek bedoeld，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Voor = question element + wie = fin. verb + is = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wie. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. cursus Techniek bedoeld."
          }
        ]
      }
    },
    "Wat kan hij zelf kiezen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ kan（变位动词）+ hij（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + kan = fin. verb + hij = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Bus 14 en bus 323 rijden de komende periode een andere route dan normaal.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Kijk in het schema wat er verandert.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 wat er verandert.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. wat er verandert.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Er is kermis in de binnenstad.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "in de route De bus rijdt via een andere route en stopt niet bij de bushalte aan de Binnensingel.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Daar is voor twee weken een extra bushalte.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "De bus kan niet door het centrum rijden.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "De bus komt dus niet bij de halte in de Kerkstraat.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、dus 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, dus. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "U kunt bij de extra bushalte bij het tankstation in de Koopmansstraat opstappen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "De bus rijdt dan tijdelijk via de Hoofdstraat.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Tot wanneer rijdt deze bus een andere route?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Tot（疑问词/疑问成分）+ wanneer（变位动词）+ rijdt（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 een andere route，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Tot = question element + wanneer = fin. verb + rijdt = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. een andere route."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Waar is voor twee weken een bushalte voor bus 323?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waar（疑问词/疑问成分）+ is（变位动词）+ voor（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waar = question element + is = fin. verb + voor = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "De vrouw van Selem neemt elke dag bus 14.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Waarom rijdt die bus in oktober een andere route?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waarom（疑问词/疑问成分）+ rijdt（变位动词）+ die（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 een andere route，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waarom = question element + rijdt = fin. verb + die = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. een andere route."
          }
        ]
      }
    },
    "Er komen nieuwe leslokalen in het Kuijpergebouw.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "De extra lokalen komen op de eerste verdieping.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Daarom gaat deze verdieping vanaf volgende week maandag een paar dagen dicht.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarom（句首时间/地点/原因/宾语等成分）+ gaat（变位动词）+ deze（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarom = fronted element + gaat = fin. verb + deze = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Er zijn dan geen lessen in het Kuijpergebouw.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、geen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, geen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Ook het studiecentrum is op deze dagen gesloten.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Ook het studiecentrum（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ op（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Ook het studiecentrum = fronted element + is = fin. verb + op = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Studeren kan dan op de begane grond, in het computerlokaal.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "De verbouwing duurt tot en met donderdag, daarna gaat het hele gebouw weer open.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daarna、weer、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daarna, weer, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Vanaf vrijdag zijn er dus weer lessen op de eerste verdieping.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Vanaf vrijdag（句首时间/地点/原因/宾语等成分）+ zijn（变位动词）+ er（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 weer、dus 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Vanaf vrijdag = fronted element + zijn = fin. verb + er = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as weer, dus. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Ook de lessen van de nieuwe cursus 'Nederlands voor beginners' zijn dan in dit gebouw.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Ook（句首时间/地点/原因/宾语等成分）+ de（变位动词）+ lessen（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Ook = fronted element + de = fin. verb + lessen = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "De cursus 'Nederlands in de praktijk' kan door de verbouwing niet doorgaan in het Kuijpergebouw.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We willen geen lessen overslaan.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Daarom is de les van woensdag in het Marcellusgebouw aan de Molenstraat.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarom（句首时间/地点/原因/宾语等成分）+ is（变位动词）+ de（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarom = fronted element + is = fin. verb + de = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "De laatste twee lessen zijn weer gewoon in het Kuijpergebouw.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 weer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as weer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Kan dat?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Kan（问句开头的变位动词）+ dat（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 从句连接词 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 Kan dat，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Kan = fin. verb at the start + dat = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by subclause marker. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. Kan dat."
          }
        ]
      }
    },
    "Vanaf wanneer is er volgende week weer les in het Kuijpergebouw?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Vanaf（问句开头的变位动词）+ wanneer（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 in het Kuijpergebouw，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 weer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Vanaf = fin. verb at the start + wanneer = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. in het Kuijpergebouw."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as weer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat moet ze weten?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ ze（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + ze = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Ik merk dat niet iedereen altijd goed de regels volgt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 de regels volgt.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、altijd 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. de regels volgt.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, altijd. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Daarom leg ik ze nog een keer uit in deze e-mail.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarom（句首时间/地点/原因/宾语等成分）+ leg（变位动词）+ ik（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 uitleggen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarom = fronted element + leg = fin. verb + ik = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb uitleggen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Jullie nemen vaak samen pauze, maar dat is niet fijn voor onze klanten.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 voor onze klanten.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、samen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. voor onze klanten.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, samen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Er zijn dan soms niet genoeg mensen in de winkel.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wil je pauze nemen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wil（问句开头的变位动词）+ je（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wil = fin. verb at the start + je = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Kijk dan even of het niet te druk is.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 te druk is.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、niet、even 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. te druk is.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, niet, even. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Let hier ook op bij elkaar.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Zeg er dan wat van.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 dan wat van.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. dan wat van.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Ik hoop dat jullie zelf kunnen bepalen wanneer jullie pauze kunnen nemen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 pauze kunnen nemen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 zelf 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. pauze kunnen nemen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as zelf. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dat hoeven jullie mij niet te vragen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 niet te vragen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、even 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. niet te vragen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, even. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Ga niet stil zitten als er geen klanten in de winkel zijn.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 de winkel zijn.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、geen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. de winkel zijn.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, geen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Zorg dat de winkel er altijd netjes uitziet.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 altijd netjes uitziet.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 altijd 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. altijd netjes uitziet.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as altijd. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dat kun je in de winkel zetten.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 de winkel zetten.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. de winkel zetten.."
          }
        ]
      }
    },
    "Schoonmaken kan ook.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Stofzuigen doen we alleen als de winkel dicht is.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 winkel dicht is.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 alleen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. winkel dicht is.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as alleen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Tot slot: ik weet dat jullie graag met de klanten praten, en dat is prima.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 dat is prima.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. dat is prima.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Het is fijn dat jullie vriendelijk tegen hen zijn.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 tegen hen zijn.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. tegen hen zijn.."
          }
        ]
      }
    },
    "Maar jullie praten ook veel met elkaar.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Daar ga ik meer op letten, want het is niet netjes.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、daar、meer 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, daar, meer. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Klanten denken dan misschien dat jullie niet hard werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 niet hard werken.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、niet 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. niet hard werken.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, niet. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als jullie vragen hebben, hoor ik het graag.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 ik het graag.，所以和英文自然语序不同。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ hoor（主句变位动词）+ ik（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. ik het graag.."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + hoor = main fin. verb + ik = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "Wat moet hij eerst doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ hij（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + hij = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "De winkel is open, maar er zijn geen klanten.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat moet Ali doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ Ali（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + Ali = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Waar gaat Hans meer op letten?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waar（疑问词/疑问成分）+ gaat（变位动词）+ Hans（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waar = question element + gaat = fin. verb + Hans = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Ik hoop dat je je snel beter voelt.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 snel beter voelt.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. snel beter voelt.."
          }
        ]
      }
    },
    "Je moet deze toets nog wel doen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dat kan op 10 december om 10.00 uur.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 om 10.00 uur.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. om 10.00 uur.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "We bespreken de toets dan in de les daarna, op 15 december.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、daarna、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, daarna, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Je moet vier foto's uitzoeken voor de toets.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 uitzoeken。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb uitzoeken. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Je mag zelf weten wat voor foto's dit zijn.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 foto’s dit zijn.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 zelf 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. foto’s dit zijn.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as zelf. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Tijdens de toets moet je over die foto's vertellen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Tijdens de toets（句首时间/地点/原因/宾语等成分）+ moet（变位动词）+ je（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 die foto’s vertellen.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Tijdens de toets = fronted element + moet = fin. verb + je = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. die foto’s vertellen.."
          }
        ]
      }
    },
    "Neem de foto's dus ook mee, de 10e.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook、dus 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook, dus. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Het is slim om voor de toets nog te oefenen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "In het cursusboek staan een paar oefentoetsen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In het cursusboek（句首时间/地点/原因/宾语等成分）+ staan（变位动词）+ een（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In het cursusboek = fronted element + staan = fin. verb + een = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Die kun je doen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 kun je doen.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. kun je doen.."
          }
        ]
      }
    },
    "Je kunt ook nog even naar je portfolio kijken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook、even、nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook, even, nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Daarin staan opdrachten die je al gedaan hebt.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Daarin（句首时间/地点/原因/宾语等成分）+ staan（变位动词）+ opdrachten（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 al gedaan hebt.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Daarin = fronted element + staan = fin. verb + opdrachten = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. al gedaan hebt.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Die kunnen je helpen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 die 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 kunnen je helpen.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by die. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. kunnen je helpen.."
          }
        ]
      }
    },
    "Je mag trouwens geen woordenboek gebruiken tijdens de toets.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Als je de toets niet haalt, kun je nog een herkansing doen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 een herkansing doen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 niet、nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ kun（主句变位动词）+ je（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. een herkansing doen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as niet, nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + kun = main fin. verb + je = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "Dat kan maximaal één keer.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 maximaal één keer.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. maximaal één keer.."
          }
        ]
      }
    },
    "Als je de herkansing ook niet haalt, krijg je geen certificaat.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 je geen certificaat.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook、niet、geen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ krijg（主句变位动词）+ je（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. je geen certificaat.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook, niet, geen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + krijg = main fin. verb + je = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "Wil je wel een certificaat?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wil（问句开头的变位动词）+ je（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wil = fin. verb at the start + je = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Dan moet je extra opdrachten voor je portfolio doen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Dan（句首时间/地点/原因/宾语等成分）+ moet（变位动词）+ je（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Dan = fronted element + moet = fin. verb + je = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Je kunt dan alsnog je certificaat voor de cursus krijgen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wanneer kan Yuri de spreektoets inhalen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wanneer（疑问词/疑问成分）+ kan（变位动词）+ Yuri（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wanneer = question element + kan = fin. verb + Yuri = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Wat moet Yuri meenemen naar de spreektoets?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ moet（变位动词）+ Yuri（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 meenemen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + moet = fin. verb + Yuri = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb meenemen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          }
        ]
      }
    },
    "Wij knippen alleen op afspraak, dus u hoeft nooit te wachten!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 alleen、dus 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as alleen, dus. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wilt u een afspraak maken?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Bel dan naar 030 – 516 13 33.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wilt u advies over uw haar?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Wilt u bijvoorbeeld graag krullen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          }
        ]
      }
    },
    "Dat kan!": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 Dat kan，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. Dat kan."
          }
        ]
      }
    },
    "Wij geven gratis advies bij elke afspraak.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 even 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as even. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Op onze website www.kapperstyle.nl staan foto's van onze klanten met hun oude en nieuwe kapsel.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op onze website www.kapperstyle.nl（句首时间/地点/原因/宾语等成分）+ staan（变位动词）+ foto’s（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op onze website www.kapperstyle.nl = fronted element + staan = fin. verb + foto’s = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          }
        ]
      }
    },
    "Daar zit misschien wel iets leuks voor u tussen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 daar、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as daar, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Elke maand geven we één gratis knipbeurt weg!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 even 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as even. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wilt u ook kans maken?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wilt（问句开头的变位动词）+ u（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wilt = fin. verb at the start + u = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Meld u dan aan voor onze nieuwsbrief via style@mail.nl.": {
      "zh": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 aanmelden。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb aanmelden. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Wat kan ze dan doen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ kan（变位动词）+ ze（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + kan = fin. verb + ze = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Hoeveel kost dat?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Hoeveel（问句开头的变位动词）+ kost（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 从句连接词 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 Hoeveel kost dat，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Hoeveel = fin. verb at the start + kost = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by subclause marker. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. Hoeveel kost dat."
          }
        ]
      }
    },
    "Evita moet elke dag tot 18.00 uur werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Op welke dag kan ze naar Kapper Style?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op（疑问词/疑问成分）+ welke（变位动词）+ dag（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op = question element + welke = fin. verb + dag = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "We hebben daarom een feest gepland met al hun vrienden, ook met jou dus.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 ook、dus、daar 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as ook, dus, daar. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Het feest is nog een verrassing voor ze!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We vieren het op 24 april in café De Sjoes, vanaf 16.00 uur!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Laat je voor 15 april aan mij weten of je kunt komen?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Laat（问句开头的变位动词）+ je（主语）。这是 yes/no 问句，所以变位动词直接放到主语前。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 of 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 je kunt komen，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Laat = fin. verb at the start + je = subj. This is a yes/no question, so the fin. verb moves before the subj."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by of. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. je kunt komen."
          }
        ]
      }
    },
    "We verzamelen om 15.00 uur bij het zwembad.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Zorg dat je er dan bent, want we willen dan een lied oefenen.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 een lied oefenen.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. een lied oefenen.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Dat gaan we voor Thomas en Janneke zingen op het feest.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 op het feest.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. op het feest.."
          }
        ]
      }
    },
    "Om 15.30 uur ga ik Thomas en Janneke ophalen.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Om 15.30 uur（句首时间/地点/原因/宾语等成分）+ ga（变位动词）+ ik（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 ophalen。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Om 15.30 uur = fronted element + ga = fin. verb + ik = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb ophalen. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "De rest kan dan naar het café rijden.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Ik vind het leuk om samen een cadeau te geven.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 even、samen 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as even, samen. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "We zouden natuurlijk geld kunnen geven, maar dat is wel een beetje saai.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 een beetje saai.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 even、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. een beetje saai.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as even, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Weet jij wat Thomas en Janneke leuk vinden?": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 Janneke leuk vinden，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. Janneke leuk vinden."
          }
        ]
      }
    },
    "Ik weet dat ze van lezen houden, maar hun kast staat al vol boeken.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 dat 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 al vol boeken.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by dat. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. al vol boeken.."
          }
        ]
      }
    },
    "Ik heb dus eigenlijk geen idee.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 geen、dus 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as geen, dus. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Laat het me dan weten!": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Tot wanneer kan Martin zich aanmelden voor het feest?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Tot（疑问词/疑问成分）+ wanneer（变位动词）+ kan（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 voor het feest，所以和英文自然语序不同。"
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "主干中有可分动词/小品词动词 aanmelden。荷兰语常把变位动词部分放前面，把小品词或不定式部分放到后面，所以会看到类似“动词前半部分 + ... + 小尾巴”的结构。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Tot = question element + wanneer = fin. verb + kan = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. voor het feest."
          },
          {
            "label": "Type C — Split verb / particle verb",
            "nl": "The core contains the separable/particle verb aanmelden. Dutch often puts the finite verb part early and the particle or infinitive part later, creating a split-verb pattern."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Waarom moet Martin om 15.00 uur bij het zwembad zijn?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Waarom（疑问词/疑问成分）+ moet（变位动词）+ Martin（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Waarom = question element + moet = fin. verb + Martin = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "De komende weken is er een ander werkrooster.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Er zijn namelijk een paar feestdagen.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有时间、地点、方式、否定词或介词短语等成分。荷兰语常把这些小词放在句中；英文通常会换到更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains time/place/manner/negation/prepositional elements. Dutch often places these mid-sentence; English usually repositions them."
          }
        ]
      }
    },
    "Een aantal mensen is dan vrij.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "Er werken dus minder mensen, maar het is wel druk.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dus、wel 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dus, wel. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "De rest moet dus extra dagen werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dus 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dus. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          }
        ]
      }
    },
    "In het rooster zie je wanneer en op welke afdeling je moet werken.": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：In（句首时间/地点/原因/宾语等成分）+ het（变位动词）+ rooster（主语）。句首成分占第 1 位；根据 V2，变位动词仍在第 2 位，所以主语放到动词后。"
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 wanneer 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 je moet werken.，所以和英文自然语序不同。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: In = fronted element + het = fin. verb + rooster = subj. The fronted element takes position 1; by V2, the fin. verb stays in position 2, so the subj. follows it."
          },
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by wanneer. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. je moet werken.."
          }
        ]
      }
    },
    "Als je nog vragen hebt, kom dan naar me toe.": {
      "zh": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "主干中有 als 引导的小句；从句里通常是“主语 + 其他成分 + 动词组”。这里动词组靠近从句末尾，例如 naar me toe.，所以和英文自然语序不同。"
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "主干中有 dan、nog 这类时间/地点/方式/否定/语气小词。荷兰语常把这些词放在句中或宾语附近；英文通常会移到句尾、句首或改成更自然的位置。"
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Als-clause（前置条件从句）+ kom（主句变位动词）+ dan（主语）。条件从句放句首后，主句仍遵守 V2，所以出现“动词 + 主语”。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type B — Verb group at the end",
            "nl": "The sentence contains a subclause introduced by als. In Dutch subclauses, the pattern is often subj. + other parts + verb group; the verb group appears near the end, e.g. naar me toe.."
          },
          {
            "label": "Type D — Dutch middle-position words",
            "nl": "The core contains middle-position words such as dan, nog. Dutch often places time, place, manner, negation, or modal particles mid-sentence; English often moves them to a more natural position."
          },
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Als-clause = fronted if-clause + kom = main fin. verb + dan = subj. The if-clause takes position 1, so the main clause starts with fin. verb + subj."
          }
        ]
      }
    },
    "Wat zegt Gerrie over de komende weken?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Wat（疑问词/疑问成分）+ zegt（变位动词）+ Gerrie（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Wat = question element + zegt = fin. verb + Gerrie = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    },
    "Op welke afdeling moet Bouchra op 30 april werken?": {
      "zh": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "主干：Op（疑问词/疑问成分）+ welke（变位动词）+ afdeling（主语）。这是问句，所以变位动词放在主语前；如果还有动作动词，它通常放到后面。"
          }
        ]
      },
      "en": {
        "forms": [
          {
            "label": "Type A — Verb before subject",
            "nl": "Core: Op = question element + welke = fin. verb + afdeling = subj. In Dutch questions, the fin. verb comes before the subj.; any action verb often appears later."
          }
        ]
      }
    }
  }
};
