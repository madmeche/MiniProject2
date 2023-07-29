import React from "react";
import {Link} from 'react';
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HouseIcon from "@mui/icons-material/House";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function MasonryImageList() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        
        <BottomNavigationAction
        // <Link to='/'>
          label="Home"
          value="home"
          icon={<HouseIcon />}
        //   </Link>
        />
        
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />

        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>

      <ImageList
        sx={{
          width: 500,
          height: 450,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
        }}
        rowHeight={200}
        gap={1}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    img: "https://www.southernliving.com/thmb/XQBz1Qu_fa5Cilqhley1u-HOv-k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ga_653798787_spcms_0-2000-693ed09f1bfb40de99fd5e42382d5c69.jpg",
    title: "Peggy Martin",
    // author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2045/8185/files/little_gem.jpg?3416864085630363789",
    title: "Dwarf Magnolia",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://txmg.org/orange/files/2020/05/73742A.jpeg",
    title: "Astilbe",
    author: "@helloimnik",
  },
  {
    img: "https://txmg.org/orange/files/2020/05/4B08C92A-7AE9-4B4C-923A-CF8AFCF34104-300x225.jpeg",
    title: "Colues",
    author: "@nolanissac",
  },
  {
    img: "https://m.media-amazon.com/images/I/610n5YguQXL._AC_UF350,350_QL80_.jpg",
    title: "Fancy Leaf Caladium",
    author: "@hjrc33",
  },
  {
    img: "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/sunflower-1627193_1920.jpg?itok=td7mL8qA",
    title: "Sunflower",
    author: "@arwinneil",
    featured: true,
  },

  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTUERwcOEZnXNTMVGSN1XHY4GirQQWT4kCwazSci5-yKc-HzdQ6o4yX5tM-6f3KXD_W4&usqp=CAU",
    title: "Zinnias",
    author: "@silverdalex",
  },
  {
    img: "https://cdn11.bigcommerce.com/s-5ahp77r7un/images/stencil/1000x1000/products/1664/3085/Sunshine_ligustrum_landscape2__19541.1540320934.jpg?c=2",
    title: "Sunshine Ligustrum",
    author: "@shelleypauls",
  },
  {
    img: "https://www.monrovia.com/media/500x700_flamingo_dappled_willow_in_landscape_copy.jpg",
    title: "Flamingo Dappled Willow",
    author: "@peterlaster",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7vudGX_CPzUUgeGYNb12Abvcte-yQxUZKKYadX_GZ8r3YMX8I1hMsE-FwjzJS553yZc&usqp=CAU",
    title: "Hydrangea Pinky Winky",
    author: "@southside_customs",
  },
];
