
"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useSearchParams } from "next/navigation";

export default function Page2() {
  const searchParams = useSearchParams();

  const first = searchParams.get("first");  
  const last = searchParams.get("last");    
  const email = searchParams.get("email");

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Typography>first: {first}</Typography>
      <Typography>last: {last}</Typography>
      <Typography>email: {email}</Typography>
      
    </Box>
  );
}

