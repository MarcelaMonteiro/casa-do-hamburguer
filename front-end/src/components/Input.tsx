const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="placeholder:[#32343E] w-[350px] rounded-md bg-white px-2 py-[10px] text-xs text-[#32343E] outline-none"
    />
  );
};

export default Input;
