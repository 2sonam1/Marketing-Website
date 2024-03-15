import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { IoMdChatboxes } from "react-icons/io";
export default function FloatingButton() {
    return (
        <Box sx={{
            '& > :not(style)': { m: 1 }, position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000, }}>
            <Fab color="primary" aria-label="add" bottom={16}
                right={16}>
                <IoMdChatboxes className='size-8' />
            </Fab>
        </Box>
    );
}