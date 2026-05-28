export default function Stats() {
  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
    },
    {
      number: "15K+",
      label: "Gifts Delivered",
    },
    {
      number: "50+",
      label: "Premium Categories",
    },
    {
      number: "4.9",
      label: "Average Rating",
    },
  ];

  return (
    <section className="relative py-24 border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-2 md:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                text-center
                py-10
                border-white/5
                border-r last:border-r-0
              "
            >

              <h3
                className="
                  text-5xl md:text-7xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                {item.number}
              </h3>

              <p
                className="
                  mt-4
                  text-xs md:text-sm
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}