import { Link, List, ListItem, Typography } from '@mui/material'
import React,{ useState } from 'react' 
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import { Location } from '../../../../../interface';
import NextLink from "next/link";



export default function NearByLocationItem({title, homeValues}:{title:String,homeValues: Location[]}) {
    const [isShown, setIsShown] = useState(false);
    return (
        <div style={{ border: "1px solid #dcdcdc", padding: 10 }}> 
            <Typography>{`Home values for ${title} near San Juan, PR`}</Typography>
            <List style={{ fontSize: 14 }}>
            {homeValues.map((homeValuesItem, index) => {
                if(isShown|| index<3){
                    return (<ListItem
                        style={{
                          justifyContent: "space-between",
                          padding: 10,
                          alignItems: "flex-start",
                        }}
                        key={index}
                      >
                        <NextLink href="#" passHref>
                          <Link underline="hover" style={{ color: "#37c" }}>
                            {homeValuesItem.name}
                          </Link>
                        </NextLink>
                        <Typography>{`$${homeValuesItem.price}`}</Typography>
                      </ListItem>)
                }
                 
              
            })}
            {isShown ? (
              <ListItem
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#37c",
                  cursor: "pointer",
                  width: 120,
                }}
                onClick={() => {
                  setIsShown(!isShown);
                }}
              >
                <Typography
                  style={{ fontWeight: "bold", fontSize: 12 }}
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  SEE LESS
                </Typography>
                <ArrowDropUpTwoToneIcon />
              </ListItem>
            ) : (
              <ListItem
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#37c",
                  cursor: "pointer",
                  width: 120,
                }}
                onClick={() => {
                  setIsShown(!isShown);
                }}
              >
                <Typography
                  style={{ fontWeight: "bold", fontSize: 12 }}
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  SEE MORE
                </Typography>
                <ArrowDropDownTwoToneIcon />
              </ListItem>
            )}
          </List>
            
        </div>
    )
}
