export default function WhyChooseUs() {
  const items = ['Auction-integrated bidding', 'Good & bad credit approvals', 'Legal consignment + broker delivery'];
  return (
    <section className="mt-8 grid md:grid-cols-3 gap-4">
      {items.map((item) => <div key={item} className="glass p-4">{item}</div>)}
    </section>
  );
}
