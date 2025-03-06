import PocketBase from "pocketbase";

type Note = {
  id: string;
  title: string;
  content: string;
  created: string;
};

async function getNote(noteId: string): Promise<Note> {
  const db = new PocketBase("http://127.0.0.1:8090");
  const data = await db.collection("notes").getOne(noteId);

  return data as unknown as Note;
}

export default async function NotePage({ params }: { params: { id: string } }) {
  const { id, title, content, created } = await getNote(params.id);

  return (
    <div>
      <h1>notes/{id}</h1>
      <div>
        <h3>{title}</h3>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </div>
  );
}
