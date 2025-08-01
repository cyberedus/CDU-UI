import { Box } from "@mui/material"

const WhatsApp = () => {
    console.log('whatsapp')
    return (
        <Box
            sx={{
                position: 'relative',
                height: 50,
                width: 50,
                top: 150,
                zIndex: 900
            }}
        >WhatsApp</Box>
    )
}
export default WhatsApp