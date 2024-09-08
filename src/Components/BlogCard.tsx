interface PropsType {
  img: string;
  title: string;
};

const BlogCard = ({ img , title}: PropsType) => {
  return (
    <div className="space-y-4">
      <img src={img} alt={title} />
      <p className="text-gray-500 font-semibold">Feb 29 2024 by: Admin</p>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis facere nisi totam quos sequi illum animi incidunt iusto est praesentium ipsam error sint maiores soluta accusantium, necessitatibus minima eius, perferendis enim? Explicabo, beatae similique ab modi pariatur dolore sit aut.</p>

      <button className="border-b border-black font-semibold italic">Read More</button>


    </div>
  )
}

export default BlogCard
