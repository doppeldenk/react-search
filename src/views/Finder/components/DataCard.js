import React from 'react';

import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

export default function DataCard(props) {
    const { data } = props;

    const { address } = data;

    const normalizedAddress = address
        ?
            `${address.address1}, ${address.city}, ${address.state} ${address.postalCode}`
        : '';

    return (
        <Card variant="outlined">
            <CardHeader
                title={data.name}
                avatar={
                    <IconButton aria-label="Star this item" onClick={() => props.toggleStarred(data, !data.starred)}>
                        { data.starred && <Star />}
                        { !data.starred && <StarBorder />}
                    </IconButton>
                }
            />

            {
                data.image &&
                <CardMedia
                    component="img"
                    height="100"
                    image={data.image}
                    alt=""
                >
                </CardMedia>
            }
            <CardContent>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Type"
                            secondary={data.type}
                        />
                    </ListItem>

                    {/* Product fields */}
                    {
                        data.productCategory &&
                        <ListItem>
                            <ListItemText
                                primary="Product Category"
                                secondary={data.productCategory}
                            />
                        </ListItem>
                    }
                    {
                        data.previewText &&
                        <ListItem>
                            <ListItemText
                                primary="Preview text"
                                secondary={data.previewText}
                                />
                        </ListItem>
                    }

                    {/* Animal fields */}
                    {
                        data.taxonomy?.scientificName &&
                        <ListItem>
                            <ListItemText
                                primary="Scientific name"
                                secondary={data.taxonomy.scientificName}
                                />
                        </ListItem>
                    }

                    {/* Company fields */}
                    {
                        data.description &&
                        <ListItem>
                            <ListItemText
                                primary="Description"
                                secondary={data.description}
                            />
                        </ListItem>
                    }
                    
                    {
                        normalizedAddress &&
                        <ListItem>
                            <ListItemText
                                primary="Address"
                                secondary={normalizedAddress}
                            />
                        </ListItem>
                    }
                </List>
            </CardContent>
        </Card>
    );
}