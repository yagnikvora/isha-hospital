import Image from "next/image";
import { communityCommitmentSection } from "@/app/data/siteData";

export default function CommunitySection() {
    return (
        <section className="-mt-16 mb-18 bg-accent py-14 sm:-mt-20 sm:mb-25 sm:py-23">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-[690px] text-center">
                    <p className="text-[15px] font-semibold uppercase tracking-[0.12em] text-topbar-text">
                        {communityCommitmentSection.subtitle}
                    </p>
                    <h2 className="mt-3 text-[29px] leading-[1.18] font-bold text-text-primary sm:text-[34px]">
                        {communityCommitmentSection.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-[540px] text-[14px] leading-[1.75] text-text-secondary">
                        {communityCommitmentSection.description}
                    </p>
                </header>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
                    {communityCommitmentSection.cards.map((card) => {
                        const cardPlacement =
                            card.id <= 3
                                ? "lg:col-span-2"
                                : card.id === 4
                                    ? "lg:col-start-2 lg:col-span-2"
                                    : "lg:col-start-4 lg:col-span-2";

                        return (
                            <article
                                key={card.id}
                                className={`rounded-[10px] border border-border-light bg-secondary p-5 text-left shadow-[0_10px_28px_var(--color-contact-shadow)] transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${cardPlacement}`}
                                style={{ minHeight: "176px" }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-bg-light">
                                        <Image
                                            src={card.icon}
                                            alt=""
                                            aria-hidden="true"
                                            width={45}
                                            height={45}
                                            className="h-[45px] w-[45px]"
                                        />
                                    </div>

                                    <h3 className="text-[17px] font-bold text-text-primary">
                                        {card.title}
                                    </h3>
                                </div>

                                <p className="mt-7 text-[14px] text-text-secondary sm:mt-10">
                                    {card.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
