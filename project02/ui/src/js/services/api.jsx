const rootURL = "http://localhost:8000";

// React Task 1:
export async function fetchUser(username) {
    // replace this code with functionality that actually
    // queries that correct endpoint:
    // return {
    //     id: 18,
    //     username: "svanwart",
    //     email: "svanwart@unca.edu",
    //     first_name: "Sarah",
    //     last_name: "Van Wart",
    // };
    const response = await fetch(`/api/users/${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data;
}

// React Task 3:
export async function fetchCourses(options = {}) {
    let baseURL = `${rootURL}/api/courses?`;
    if (options.department) {
        baseURL += `department=${options.department}&`;
    }
    if (options.instructor) {
        baseURL += `instructor=${options.instructor}&`;
    }
    if (options.hours) {
        baseURL += `hours=${options.hours}&`;
    }
    if (options.title) {
        baseURL += `title=${options.title}&`;
    }

    // Add designation (classifications) parameters di, dir
    if (options.classifications) {
        options.classifications.forEach((classification) => {
            baseURL += `classifications=${classification}&`;
        });
    }

    // Add days parameter
    if (options.days) {
        options.days.forEach((day) => {
            baseURL += `days=${day}&`;
        });
    }

    // Add open-only parameter
    if (options.open !== undefined) {
        baseURL += `open=${options.open}&`;
    }

    console.log(baseURL);
    const response = await fetch(baseURL);
    const courses = await response.json();
    console.log(courses);
    return courses;
}

export async function fetchSchedule(username) {
    const response = await fetch(`${rootURL}/api/schedules/${username}`);
    return await response.json();
}

export async function deleteCourseFromSchedule(schedule, crn) {
    const url = `${rootURL}/api/schedules/${schedule.id}/courses/${crn}`;
    const response = await fetch(url, {
        method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export async function addCourseToSchedule(schedule, crn) {
    console.log(crn);
    const url = `${rootURL}/api/schedules/${schedule.id}/courses`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            crn: crn,
        }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}
