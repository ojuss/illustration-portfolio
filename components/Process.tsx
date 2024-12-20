import { FcCollaboration } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcSerialTasks } from "react-icons/fc";

const achievements = [
  {
    icon: <FcIdea className="w-10 h-10" />,
    title: "Discovery",
    description:
      "Let's connect (via Email/Linkedin) and discuss your science! Share your ideas, goals, and vision to start crafting a clear and impactful story.",
  },
  {
    icon: <FcCollaboration className="w-10 h-10" />,
    title: "Draft & Collaborate",
    description:
      "I'll create an initial draft of your visuals, and together, we'll refine it through feedback to ensure accuracy and clarity.",
  },
  {
    icon: <FcSerialTasks className="w-10 h-10" />,
    title: "Deliver",
    description:
      "Within a few revision rounds, your polished visuals are ready to communicate and engage audiences effectively.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-gray-100 flex justify-center flex-col">
      <div className="text-center py-10">
        <h2 className="text-4xl mb-4 text-black">Process</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto"></p>
      </div>
      <div className="container px-4 mx-auto relative ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 ">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className=" backdrop-blur p-6 rounded-xl border  hover:border-primary/50 transition-colors bg-gray-50"
            >
              <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl text-black mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
