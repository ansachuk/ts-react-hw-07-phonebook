import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/ts-react-hw-07-phonebook/",
	plugins: [react()],
});
