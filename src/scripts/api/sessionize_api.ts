interface ScheduleDay {
    date: string,
    rooms: ScheduleRoom[]
    timeSlots: ScheduleSlot[]
}

interface ScheduleSlot {
    slotStart: string,
    rooms: ScheduleSlotRoom[],
}

export interface ScheduleSlotRoom {
    id: number,
    name: string,
    session: ScheduleSession,
}

interface ScheduleSession {
    id: string,
    title: string,
    startsAt: string,
    endsAt: string,
    isServiceSession: boolean,
    info?: SessionInfo,
}

interface ScheduleRoom {
    id: number,
    sessions: ScheduleSession[],
}

interface ScheduleSession {
    id: string,
    title: string,
    startsAt: string,
    endsAt: string,
    isServiceSession: boolean,
    info?: SessionInfo,
}

export interface SessionInfo {
    id: string,
    title: string,
    description: string,
    startsAt: string,
    endAt: string,
    speakers?: Speaker[],
    roomId: number,
    room: string,
    sessionLevel: string,
    topic: string[],
    sessionType: string,
    language: string,
}

export interface Speaker {
    id: string,
    slug: string,
    firstName: string,
    lastName: string,
    fullName: string,
    bio: string,
    tagline: string,
    sessions?: SessionInfo[],
    profilePicture: string,
}

// GLOBAL VARS

const API_ID = "z7fbqjiv"
const API_ENDPOINT = `https://sessionize.com/api/v2/${API_ID}`;

async function SessionizeGET(method: string): Promise<any> {
    const url = `${API_ENDPOINT}/view/${method}`;
    const result = await fetch(url);
    const response = await result.text();
    const object = JSON.parse(response);

    return object;
}

export async function getSchedule(): Promise<Promise<ScheduleDay[]>> {
    const sessionsInfo = await getSessions(true);
    const schedule: ScheduleDay[] = await SessionizeGET('GridSmart');

    schedule.forEach(
        day => day.timeSlots.forEach(
            slot => slot.rooms.forEach(
                room => {
                    const sessionInfoFound = sessionsInfo.find((_s) => _s.id == room.session.id);
                    room.session.info = sessionInfoFound;
                },
            ),
        ),
    );

    return schedule;
}

export async function getSessions(includeSpeakers: boolean = false): Promise<SessionInfo[]> {
    const sessionResult: any[] = await SessionizeGET('Sessions');
    const speakers = includeSpeakers ? await getSpeakers() : null;

    const sessionsRaw: any[] = sessionResult[0].sessions;

    const sessions = sessionsRaw.map(s => parseSession(s, speakers));

    return sessions;
}

function parseSession(sessionRaw: any, speakers: Speaker[] | null): SessionInfo {
    const session: SessionInfo = {
        id: sessionRaw.id,
        title: sessionRaw.title,
        description: sessionRaw.description,
        startsAt: sessionRaw.startsAt,
        endAt: sessionRaw.endAt,
        roomId: sessionRaw.roomId,
        room: sessionRaw.room,
        sessionLevel: "",
        topic: [],
        sessionType: "",
        language: ""
    };

    const additionalProperties = sessionRaw.categories.map(c => {
        const categoryField = {};
        const categoryKey = c.name.replace(' ', '_').toLowerCase();
        categoryField[categoryKey] = c.categoryItems.map(ci => ci.name);

        return categoryField;
    }).reduce((props, cf) => Object.assign(props, cf), {});

    session.language = additionalProperties.language[0];
    session.topic = additionalProperties.topic;
    session.sessionType = additionalProperties['session_type'][0];
    session.sessionLevel = additionalProperties['session_level'][0];

    if (speakers) {
        const sessionIds: string[] = sessionRaw.speakers.map(s => s.id);
        const speakersFound = speakers.filter(({ id }) => sessionIds.includes(id));
        session.speakers = speakersFound;

        console.log(session.speakers);
    }

    return session;
}

export async function getSpeakers(includeSessions: boolean = false): Promise<Speaker[]> {
    const speakersResult: any[] = await SessionizeGET('Speakers');
    const sessions = includeSessions ? await getSessions() : null;

    const speakers: Speaker[] = speakersResult.map(s => parseSpeaker(s, sessions));

    return speakers;
}


function parseSpeaker(speakerRaw: any, sessions: SessionInfo[] | null) {
    const speaker_slug = `${speakerRaw.firstName.toLowerCase()}-${speakerRaw.lastName.toLowerCase()}`;

    const speaker: Speaker = {
        id: speakerRaw.id,
        slug: speaker_slug,
        firstName: speakerRaw.firstName,
        lastName: speakerRaw.lastName,
        fullName: speakerRaw.fullName,
        bio: speakerRaw.bio,
        tagline: speakerRaw.tagline,
        profilePicture: speakerRaw.profilePicture,
    };

    if (sessions) {
        const sessionIds: string[] = speakerRaw.sessions.map(s => s.id);
        const sessionsFound = sessions.filter(({ id }) => sessionIds.includes(id));
        speaker.sessions = sessionsFound;
    }

    return speaker;
}