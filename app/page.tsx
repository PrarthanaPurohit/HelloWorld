"use client";  // 👈 This makes it a Client Component

import * as React from "react";
import { useRouter } from "next/navigation";  // 👈 Import useRouter
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";


export default function BasicList() {
  const router = useRouter();  // 👈 Initialize useRouter
  const [first, setFirst] = useState<string>("");
  const [last, setLast] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const toDoList = ["Item 1", "Item 2", "Item 3", "Riya Pagal"];

  function handleNavigate() {
    router.push(`/page2?first=${first}&last=${last}&email=${email}`);  // 👈 Navigate to /page2
  }

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", p: 2 }}>
      


      <Box sx={{ mt: 2 }}>
        <TextField
          label="First name"
          variant="outlined"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          fullWidth
        />
        <TextField 
          sx={{mt: 2}}
          label="Last name"
          variant="outlined"
          value={last}
          onChange={(f) => setLast(f.target.value)}
          fullWidth
        />
        <TextField
        sx={{mt: 2}}
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={handleNavigate}>
          Go To Page 2
        </Button>
      </Box>


    </Box>
  );
}
