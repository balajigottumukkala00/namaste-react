const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl m-2 p-2">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="p-2 m-2 border border-blue-500 rounded"
          placeholder="name"
        />
        <input
          type="text"
          className="p-2 m-2 border border-blue-500 rounded"
          placeholder="message"
        />
        <button className="p-2 m-2 bg-sky-600 text-white rounded">
          Submit
        </button>
      </form>
      {/* <h3 className="text-slate-500 text-base m-2 p-2">
        You can contact us for the email emailswiggy@gmail.com for any Queries.
      </h3> */}
    </div>
  );
};

export default Contact;
