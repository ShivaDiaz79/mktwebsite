import Link from 'next/link';

const Button = ({ text, href }) => {
  return (
    <div className="flex justify-center">
      <Link href={href}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
