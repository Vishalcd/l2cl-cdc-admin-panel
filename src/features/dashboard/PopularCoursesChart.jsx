import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

function PopularCoursesChart({ popularCourses }) {
  const { isDarkMode } = useDarkMode();

  const colors = isDarkMode
    ? ["#1d4ed8", "#b91c1c", "#a16207", "#15803d"]
    : ["#3b82f6", "#ef4444", "#eab308", "#22c55e"];

  const data = popularCourses.map((course, i) => {
    return {
      courseName: String(course.courseName).toUpperCase(),
      userCount: course.userCount,
      color: colors[i],
    };
  });

  return (
    <div className=" col-start-2 col-end-[-1] dark:border-stone-700 dark:bg-stone-800 border bg-zinc-50 rounded-md border-zinc-200 p-10 ">
      <h2 className=" font-semibold dark:text-stone-200 text-zinc-700 text-xl mb-5">
        Popular Courses
      </h2>
      <ResponsiveContainer height={300}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={85}
            outerRadius={110}
            nameKey="courseName"
            dataKey="userCount"
            cx="30%"
            cy="50%"
            paddingAngle={3}>
            {data.map((entry) => {
              return <Cell fill={entry.color} stroke={entry.color} key={entry.courseName} />;
            })}
          </Pie>
          <Tooltip />
          <Legend
            iconSize={15}
            iconType="circle"
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="verticle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PopularCoursesChart;
