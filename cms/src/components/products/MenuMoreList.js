import * as React from 'react';
import { Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import {
    MenuItem,
} from '@mui/material';
import Iconify from '../iconify';

export default function MenuMoreList({ open, handleCloseMenu }) {

    return (
        <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
                sx: {
                    p: 1,
                    '& .MuiMenuItem-root': {
                        px: 1,
                        typography: 'body2',
                        borderRadius: 0.75,
                    },
                },
            }}
        >
            <Link to="/dashboard/analytic" >
                <MenuItem>
                    <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                    View Details This Video
                </MenuItem>
            </Link>

            <MenuItem sx={{ color: 'error.main' }}>
                <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
                View Details This Video
            </MenuItem>
        </Popover>
    );
}