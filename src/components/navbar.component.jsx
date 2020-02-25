import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" class="navbar-brand">
        ExcerTracker
      </Link>
    </nav>
  );
}
