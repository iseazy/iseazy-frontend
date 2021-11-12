import * as React from 'react';
import { CenteredLayout } from 'layout';
import { CardGame } from "../pods/card-game/card-game.component";

export const CardGameScene = () => {
  return (
    <CenteredLayout>
      <CardGame/>
    </CenteredLayout>
  )
}
