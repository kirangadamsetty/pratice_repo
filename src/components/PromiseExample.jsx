import { useEffect } from "react";

function PromiseExamples() {
  useEffect(() => {
    const p1 = Promise.resolve("✅ Promise 1 resolved");
    const p2 = Promise.reject("❌ Promise 2 rejected");
    const p3 = Promise.resolve("✅ Promise 3 resolved");
    const p4 = Promise.resolve("✅ Promise 4 resolved");

    // 1️⃣ Promise.all (fails if *any one* fails)
    Promise.all([p1, p2, p3, p4])
      .then((data) => console.log("Promise.all ✅:", data))
      .catch((err) => console.log("Promise.all ❌:", err));

    // 2️⃣ Promise.any (succeeds if *any one* succeeds)
    Promise.any([p1, p2, p3, p4])
      .then((data) => console.log("Promise.any ✅:", data))
      .catch((err) => console.log("Promise.any ❌:", err));

    // 3️⃣ Promise.race (returns first one to settle – resolve or reject)
    Promise.race([p1, p2, p3, p4])
      .then((data) => console.log("Promise.race ✅:", data))
      .catch((err) => console.log("Promise.race ❌:", err));

    // 4️⃣ Promise.allSettled (returns all results, no matter what)
    Promise.allSettled([p1, p2, p3, p4]).then((results) => {
      console.log("Promise.allSettled:");
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          console.log(`✅ Promise ${index + 1} fulfilled:`, result.value);
        } else {
          console.log(`❌ Promise ${index + 1} rejected:`, result.reason);
        }
      });
    });
  }, []);

  return <div>Check your console for Promise examples!</div>;
}

export default PromiseExamples;
