// Desktop entrypoint for the Greek (Ελληνικά) language pack.
//
// All strings live in locales/el.desktop.yaml (desktop surface) and
// locales/el.yaml (core surface); the gateway serves them over
// i18n.catalog when display.language is 'el'. This file is the declared
// Desktop entrypoint required by the plugin catalog admission rules —
// the pack registers nothing at runtime and needs no code.

export default {
  id: 'hermes-lang-el',
  name: 'Ελληνικά (Greek)',
  defaultEnabled: true,
  register() {
    // No-op: locales/ is the entrypoint; registration happens through the
    // gateway's i18n.catalog delivery, not through JS.
  }
}
