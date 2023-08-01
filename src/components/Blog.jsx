const Blog = () => {
  const blogs = [
    {
      question: "When should you use context API? ",
      answer:
        "Use the Context API in React when you need to manage global state, share data or functions between components, or deal with global settings and configurations. It simplifies cross-component communication, reduces prop drilling, and avoids passing props through many levels of components. The Context API provides a centralized and efficient way to handle shared state and settings, enhancing code readability and maintainability in your application.",
    },
    {
      question: "What is a custom hook? ",
      answer:
        "A custom hook is a reusable function in React that allows you to abstract logic into a separate function and share it among different components. It enables you to encapsulate complex logic and stateful operations, promoting code reusability and better organization in React applications.",
    },
    {
      question: "What is useRef? ",
      answer:
        "`useRef` is a hook in React that returns a mutable ref object. It allows you to persist a value between renders without causing a re-render. It's commonly used to access or modify DOM elements and store any value that needs to be retained between renders.",
    },
    {
      question: "What is useMemo?",
      answer:
        "`useMemo` is a hook in React that memorizes the result of a function call and only re-computes it if its dependencies change. It optimizes performance by preventing unnecessary re-calculation of expensive operations, especially in situations where the computation might otherwise occur frequently during rendering.",
    },
  ];
  return (
    <div>
      <section>
        <img src="/public/images/bg-1.jpg" alt="" className="w-fit" />
        <h2 className="text-center text-5xl font-bold uppercase my-10 ">
          Blogs
        </h2>
      </section>
      <section>
        {blogs.map((blog, id) => (
          <div key={id} className="border border-purple-600 p-5">
            <h1 className="text-5xl uppercase mb-5">{blog.question}</h1>
            <p className="text-2xl">{blog.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
