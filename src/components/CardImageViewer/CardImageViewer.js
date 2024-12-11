import React, { useState } from 'react';
import './CardImageViewer.scss';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardMedia from '@mui/material/CardMedia';
import ImageViewer from '../ImageViewer/ImageViewer';
import ShareButton from '../ShareButton/ShareButton';

export default function CardImageViewer({ cardModel }) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Card className="dashboard-card">
      <CardHeader
        title={cardModel.title}
        action={
          <>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => { setViewerOpen(true); handleMenuClose(); }}>Expand</MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ShareButton url={cardModel.shareUrl || ''}/>
              </MenuItem>
            </Menu>
          </>
        }
      />
      <ImageViewer
        description={cardModel.description}
        imageURL={cardModel.url}
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
      {cardModel.type === 'image' && (
        <CardMedia
          component="img"
          className="image"
          src={cardModel.url}
          alt="Error Photo"
          onClick={() => setViewerOpen(true)}
        />
      )}
    </Card>
  );
}
