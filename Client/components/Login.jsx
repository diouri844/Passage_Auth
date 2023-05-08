import "@passageidentity/passage-auth";

export default function Login(){
  return (
    <passage-auth
    app-id={ import.meta.env.VITE_REACT_APP_PASSAGE_APP_ID}>
    </passage-auth>
  )
};
