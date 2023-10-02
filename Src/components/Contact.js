const Contact = () => {
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-xl m-4 p-4">Contact Us</h1>
            <input className="border border-black rounded-lg m-2 p-2" placeholder="Name"></input>
            <input className="border border-black rounded-lg m-2 p-2" placeholder="Your Message"></input>
            <button className="m-2 p-2 bg-green-300 rounded-lg">Submit</button>
        </div>
    );
};

export default Contact;