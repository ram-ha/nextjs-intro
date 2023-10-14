import Seo from "@/components/Seo";

export default function movieId({ params }) {
    const [title, id] = params || [];
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    );
}

export function getServerSideProps({ params: { params } }) {
    return {
        props: {
            params,
        },
    };
}