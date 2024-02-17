/**
 *
 * todo: Detalles para mostrar
 *
 */

const Details = ({ items, songs }) => {
  return (
    <div className="d-flex pt-2 ">
      <ul className="">
        <h5>Rana</h5>
        {items.frog.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </ul>
      <ul className="">
        <h5>Libélula</h5>
        {items.dragonFly.map((item) => (
          <p key={item}>{item} </p>
        ))}
      </ul>
      <ul className="">
        <h5>Grillo</h5>
        {items.cricket.map((item) => (
          <p key={item}>{item} </p>
        ))}
      </ul>

      <ul className="">
        <h5>Canción </h5>
        {songs[0].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </ul>
      <ul className="">
        <h5>Canción </h5>
        {songs[1].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </ul>
      <ul className="">
        <h5>Canción </h5>
        {songs[2].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </ul>
    </div>
  );
};

export default Details;
