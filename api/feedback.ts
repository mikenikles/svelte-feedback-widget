import type { VercelRequest, VercelResponse } from '@vercel/node';
import gs from "google-spreadsheet";

interface Feedback {
  emotion: number;
  note?: string;
  url: string;
};

export default async (request: VercelRequest, response: VercelResponse) => {
  const feedback = JSON.parse(request.body) as Feedback;

  try {
    const doc = new gs.GoogleSpreadsheet(process.env.FEEDBACK_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: Buffer.from(
        process.env.FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64,
        "base64"
      ).toString("utf8"),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["Raw Feedback"];
    await sheet.addRow([new Date(), feedback.emotion, feedback.url, feedback.note]);
    response.status(201).end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
};