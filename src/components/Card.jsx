const Card = () => {
  return (
    <div className="w-full cursor-pointer group relative shadow rounded overflow-hidden">
      <div className="h-56">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">
          Connect to mongo database with express.
        </h3>
      </div>
    </div>
  )
}
export default Card
