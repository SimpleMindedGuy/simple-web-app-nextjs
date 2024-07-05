import Image from "next/image";

import DropDown from "@/partials/Drop-Down";
import List from "@/partials/List";
import ListItem from "@/partials/List-Item";
import Grid from "@/partials/Grid";
import GridItem from "@/partials/Grid-Item";


export default function Home() {
  return (
    <div
      className="Page">


      <DropDown>
        <List>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </List>
      </DropDown>

      <DropDown>

        <Grid>

          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </Grid>
      </DropDown>

    </div>
  );
}
