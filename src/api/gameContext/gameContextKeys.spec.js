import * as contextKeys from './gameContextKeys';

describe('[Context Keys]', () => {
  it('KEY_CTXT_CARDS is KEY_CTXT_CARDS', () => {
    const key = contextKeys.KEY_CTXT_CARDS;
    expect(key).toMatchInlineSnapshot(`"CARDS"`);
  });

  it('KEY_CTXT_ACTIVE_CARDS is KEY_CTXT_ACTIVE_CARDS', () => {
    const key = contextKeys.KEY_CTXT_ACTIVE_CARDS;
    expect(key).toMatchInlineSnapshot(`"ACTIVE_CARDS"`);
  });

  it('KEY_CTXT_FOUND_CARDS is KEY_CTXT_FOUND_CARDS', () => {
    const key = contextKeys.KEY_CTXT_FOUND_CARDS;
    expect(key).toMatchInlineSnapshot(`"FOUND_CARDS"`);
  });

  it('KEY_CTXT_ALLOWED is KEY_CTXT_ALLOWED', () => {
    const key = contextKeys.KEY_CTXT_ALLOWED;
    expect(key).toMatchInlineSnapshot(`"ALLOWED"`);
  });

  it('KEY_CTXT_GAME_FINISHED is KEY_CTXT_GAME_FINISHED', () => {
    const key = contextKeys.KEY_CTXT_GAME_FINISHED;
    expect(key).toMatchInlineSnapshot(`"GAME_FINISHED"`);
  });
});
