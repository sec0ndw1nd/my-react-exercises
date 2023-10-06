export default function Concepts({ items }) {
  return (
    <ul id='concepts'>
      {items.map((item) => {
        return (
          <li key={`${item.title}`} className='concept'>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
