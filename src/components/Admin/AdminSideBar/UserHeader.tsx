const UserHeader = () => {
  return (
    <div className="border-y py-6 px-16">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocJYO2z0aV3cT15IeV9_txuD04rcmJOVffuQD2WhH9OHs75WOyk=s288-c-no"
            alt="Profile picture"
            width={80}
            height={80}
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h2 className="font-semibold">Arfin Mia -(Admin)</h2>
          <p className="text-sm text-[#1B8D1B]">Developer (Certified)</p>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
