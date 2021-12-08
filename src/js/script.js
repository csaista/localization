$(($) =>
  $.Language({
    domNodeSelectorPrefix: "body",
    default: "enUS",
    selection: [],
    initial: null,
    templateDelimiter: { pre: "{{", post: "}}" },
    fadeEffect: true,
    textNodeParent: {
      showAnimation: [{ opacity: 1 }, { duration: "fast" }],
      hideAnimation: [{ opacity: 0 }, { duration: "fast" }],
    },
    preReplacementLanguagePattern: "^\\|({1})$",
    replacementLanguagePattern: "^([a-z]{2}[A-Z]{2}):((.|\\s)*)$",
    currentLanguagePattern: "^[a-z]{2}[A-Z]{2}$",
    replacementDomNodeName: ["#comment", "langreplacement"],
    replaceDomNodeNames: ["#text", "langreplace"],
    toolsLockDescription: "{1}Switch",
    languageHashPrefix: "language-",
    currentLanguageIndicatorClassName: "current",
    sessionDescription: "{1}",
    languageMapping: {
      deDE: ["de", "de_de", "de-de", "german", "deutsch"],
      enUS: ["en", "en_us", "en-us"],
      enEN: ["en_en", "en-en", "english"],
      frFR: ["fr", "fr_fr", "fr-fr", "french"],
    },
    onSwitched: $.noop(),
    onEnsured: $.noop(),
    onSwitch: $.noop(),
    onEnsure: $.noop(),
    domNode: { knownTranslation: "div.toc" },
  })
);
