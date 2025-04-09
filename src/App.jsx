// src/App.jsx
export default function App() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
          ¡Soy un botón bonito!
        </button>
      </div>
    );
  }


  // src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg">Elemento 1</div>
        <div className="bg-green-500 text-white p-4 rounded-lg">Elemento 2</div>
        <div className="bg-red-500 text-white p-4 rounded-lg">Elemento 3</div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg">Elemento 4</div>
      </div>
    </div>
  );
}

