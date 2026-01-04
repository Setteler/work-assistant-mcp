import express from "express";
import { z } from "zod";

const app = express();
app.use(express.json());

const SummarizeSchema = z.object({
  text: z.string().min(10),
});

app.post("/mcp/summarize_text", async (req, res) => {
  try {
    const { text } = SummarizeSchema.parse(req.body);

    res.json({
      summary: text.slice(0, 150),
      key_points: [
        "Structured MCP response",summarize_text
        "Ready for n8n Cloud"
      ],
      action_items: [
        "Review summary",
        "Trigger automation"
      ]
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/health", (_, res) => {
  res.send("ok");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ MCP running on port ${PORT}`)
);
