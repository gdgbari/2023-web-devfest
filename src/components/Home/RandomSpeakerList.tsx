import type { Speaker } from "../../scripts/api/sessionize_api";

const SpeakerPreviewElement = ({ speaker }: { speaker: Speaker }) => (
    <a
        href={`/speakers/${speaker.slug}`}
        className="bg-white p-3 flex flex-col items-center text-center"
    >
        <img src={speaker.profilePicture} alt={speaker.fullName} className="w-32 h-32 rounded-full" />
        <p className="my-2 font-medium">{speaker.fullName}</p>
        <p >{speaker.tagLine}</p>
    </a>
)

export const RandomSpeakerList = ({ speakers }:{ speakers:Speaker[] }) => {
    return <>{speakers.sort(() => Math.random() - 0.5).slice(0, 4).map((s) => (
        <div className="mx-auto">
            <SpeakerPreviewElement speaker={s} />
        </div>
    ))}</>
}


