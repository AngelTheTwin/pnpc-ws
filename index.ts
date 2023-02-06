const express = require("express");
import app from "./app";

const PORT = process.env.HTTP_PORT || 80;
app.listen(PORT, () =>
    console.log(`✅ - PNPC API Listening on port: ${PORT}.`)
);
