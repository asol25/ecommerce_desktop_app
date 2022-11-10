import React from "react";
// @mui
import {
    Popover,
    MenuItem,
} from '@mui/material';
import Iconify from "../iconify/Iconify";

export default function MenuMoreMenu({ id, open, handleCloseMenu, handleDeleteById }) {
    return (
        <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleCloseMenu}

            PaperProps={{
                sx: {
                    p: 1,
                    width: 140,
                    '& .MuiMenuItem-root': {
                        px: 1,
                        typography: 'body2',
                        borderRadius: 0.75,
                    },
                },
            }}
        >
            <MenuItem>
                <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                Edit
            </MenuItem>

            <MenuItem sx={{ color: 'error.main' }} data-id={id} onClick={() => handleDeleteById(id)}>
                <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
                Delete
            </MenuItem>
        </Popover>
    )
}