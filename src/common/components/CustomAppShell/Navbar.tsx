import React from 'react';

import {AppShell, ScrollArea} from '@mantine/core';

import {LinksGroup} from './LinksGroup';
import {linksGroupData} from './linksGroupData.ts';
import classes from './Navbar.module.css';

interface Props {
  onClick?: () => void;
}

/**
 * カスタムアプリケーションシェルのナビゲーションバー
 * @param props.onClick リンクがクリックされたときの副次的処理
 */
export const Navbar: React.FC<Props> = props => {
  const {onClick} = props;
  return (
    <AppShell.Navbar p="md">
      <ScrollArea className={classes.links}>
        {linksGroupData.map(item => (
          <LinksGroup {...item} onClick={onClick} key={item.label} />
        ))}
      </ScrollArea>
    </AppShell.Navbar>
  );
};
