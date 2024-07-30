
import AlternatingView from '@/partials/AlternatingView';
import Card from '@/partials/Card';
import CollapseListItem from "@/partials/CollapseListItem";
import List from "@/partials/List";
import ListItem from "@/partials/List-Item";

export default function Home() {

  return (

    <AlternatingView className={'Page'}>

      <CollapseListItem isEven alternate label={"Collapse Menu"} >
        <List>
          <ListItem >list Item</ListItem>
          <ListItem >list Item</ListItem>
          <ListItem >list Item</ListItem>

          <CollapseListItem alternate label={"Collapse Menu"} >
            <List>
              <ListItem >list Item</ListItem>
              <ListItem >list Item</ListItem>
              <ListItem >list Item</ListItem>
              <CollapseListItem alternate label={"Collapse Menu"} >
                <List>
                  <ListItem >list Item</ListItem>
                  <ListItem >list Item</ListItem>
                  <ListItem >list Item</ListItem>
                </List>
              </CollapseListItem>
            </List>
          </CollapseListItem>
        </List>

      </CollapseListItem>


      <Card alternate >
        <List>
          <CollapseListItem alternate label={"Collapse Menu"} >
            <List>
              <CollapseListItem alternate label={"Collapse Menu"} >
                <List>
                  <ListItem >list Item</ListItem>
                  <ListItem >list Item</ListItem>
                  <ListItem >list Item</ListItem>
                  <CollapseListItem alternate label={"Collapse Menu"} >
                    <List>
                      <ListItem >list Item</ListItem>
                      <ListItem >list Item</ListItem>
                      <ListItem >list Item</ListItem>
                    </List>
                  </CollapseListItem>
                </List>
              </CollapseListItem>
              <ListItem >list Item</ListItem>
              <ListItem >list Item</ListItem>
              <ListItem >list Item</ListItem>
              <ListItem >list Item</ListItem>
              <ListItem >list Item</ListItem>
              <ListItem >list Item</ListItem>
            </List>
          </CollapseListItem>
          <ListItem >list Item</ListItem>
          <ListItem >list Item</ListItem>
        </List>
      </Card >
    </AlternatingView>

  );
}
