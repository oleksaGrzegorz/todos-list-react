const EXAMPLE_TASKS_URL = "/todos-list-react/exampleTasks.json";

const getExampleTasks = async () => {
    const response = await fetch(EXAMPLE_TASKS_URL);

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};

export default getExampleTasks;