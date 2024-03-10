import React, { useEffect } from 'react';
import './App.css';
import { Drawer, DrawerContent, DrawerAppContent, DrawerHeader, DrawerSubtitle, DrawerTitle } from '@rmwc/drawer';
import { List, ListItem } from '@rmwc/list';
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarNavigationIcon, TopAppBarTitle, TopAppBarActionItem, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';
import '@material/drawer/dist/mdc.drawer.css';
import '@rmwc/list/styles';
import '@rmwc/top-app-bar/styles';

function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <Drawer dismissible open={open}>
          <DrawerHeader>
            <DrawerTitle>DrawerHeader</DrawerTitle>
            <DrawerSubtitle>Subtitle</DrawerSubtitle>
          </DrawerHeader>
          <DrawerContent>
            <List>
              <ListItem>Cookies</ListItem>
              <ListItem>Pizza</ListItem>
              <ListItem>Icecream</ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        {/* Optional DrawerAppContent */}
        <DrawerAppContent style={{ minHeight: '15rem', padding: '1rem' }}>
          DrawerAppContent is an optional component that will resize content
          when the dismissible drawer is open and closed. It must be placed
          directly after the Drawer component.
        </DrawerAppContent>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button onClick={() => setOpen(!open)}>
          Toggle Dismissible
        </button>
      </div>
    </>
  );
}

function App() {
  // const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  
  // console.log('nene', isDrawerOpen);

  // useEffect(() => {
  //   console.log('new value is', isDrawerOpen);
  // }, [isDrawerOpen])
  

  return (
    <div className="App">
      {/* {renderTopbar(toggleDrawerState)} */}

      {/* <>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <TopAppBarNavigationIcon icon="menu" onClick={() => setDrawerOpen(prev => !prev)} />
              <TopAppBarTitle>All Features</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem icon="favorite" onClick={() => setDrawerOpen(prev => !isDrawerOpen)} />
              <TopAppBarActionItem icon="star" />
              <TopAppBarActionItem icon="mood" />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
      </> */}

      <Example />

      {/* <div className="main-content">
        <Drawer onOpen={() => console.log('opening')} onClose={() => console.log('closing')} dismissible={true} open={isDrawerOpen}>
          
          <DrawerContent>
            <List>
              <ListItem>Cookies</ListItem>
              <ListItem>Pizza</ListItem>
              <ListItem>Icecream</ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        <DrawerAppContent
            style={{ minHeight: '16rem', padding: '4rem' }}
          >
            DrawerAppContent is an optional component that will resize
            content when the dismissible drawer is open and closed. It
            must be placed directly after the Drawer component.
          </DrawerAppContent>

      </div> */}
      
    </div>
  );
}

export default App;
