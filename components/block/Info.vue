<script setup lang="ts">
const pqcSections = [
    {
        title: "Quantum-Resistant Encryption",
        content: `As quantum computing technology advances, the threat to current encryption methods is no longer theoretical—it's becoming a near-term reality. Most of the encryption algorithms that protect our digital infrastructure, such as RSA and ECC, rely on the difficulty of solving certain mathematical problems, like prime factorization and discrete logarithms. While these are practically impossible for classical computers to solve, quantum computers could break them in a matter of minutes using algorithms like Shor's algorithm.`
    },
    {
        title: "Harvest Now, Decrypt Later Attacks",
        content: `Encryption safeguards our digital lives, from online shopping to healthcare records. However, the advent of quantum computing poses a significant threat to traditional encryption methods. "Harvest now, decrypt later" attacks, where data is stolen today to be decrypted by future quantum computers, present a pressing risk. Even Bitcoin is not immune. As our digital landscape evolves, the implementation of quantum-resistant encryption is becoming critically important for both businesses and individuals. The urgency for post-quantum cryptography (PQC) is paramount and must be addressed immediately to ensure the ongoing security and privacy of our information.`
    },
    {
        title: "The ChatGPT Moment of the PQC Industry",
        content: `We're standing at the edge of a revolution in cryptography, much like how the transformer model reshaped AI. Just as Google's transformer laid the groundwork for applications like ChatGPT, Post-Quantum Cryptography is poised to redefine the security landscape. But, as with AI, the breakthrough isn't just in the algorithms—it's in making them usable, scalable, and accessible for everyone.`
    },
    // {
    //     title: "Legislation Requirements",
    //     content: `Federal agencies are mandated to adopt quantum-resistant cryptographic methods by 2035. To maintain eligibility for federal contracts and avoid public non-compliance notifications, businesses and government contractors must transition to post-quantum cryptography (PQC). Ultimately, all organizations and society at large will need to adopt PQC to ensure data security in a quantum computing era.`
    // },
    // {
    //     title: "Why Lattice-Based Encryption is Quantum-Safe",
    //     content: `Lattice-based encryption is quantum-safe because it relies on the hardness of mathematical problems like the Shortest Vector Problem (SVP) and Closest Vector Problem (CVP). These problems involve complex structures in high-dimensional spaces that are infeasible to break using known quantum algorithms. NIST has endorsed lattice-based schemes like CRYSTALS-Kyber and CRYSTALS-Dilithium, highlighting their security and efficiency.`
    // },
    // {
    //     title: "Benefits of Lattice-Based Encryption",
    //     content: `- Security: Provides strong security against both classical and quantum attacks.\n- Efficiency: Optimized for practical use with reasonable computational and storage requirements.\n- Versatility: Suitable for a wide range of applications, including secure communications, data storage, and digital signatures.`
    // }
];
</script>
<template>
    <TLayoutHero>
        <TLayoutSection class="">
            <div class="flex xl:flex-row flex-col md:w-2/3 lg:w-full gap-8 justify-center ">
                <AInfo v-for="(section, index) in pqcSections" :key="index" :title="section.title"
                    :content="section.content" class="xl:min-w-[424px] min-h-full" />
            </div>
        </TLayoutSection>
    </TLayoutHero>
</template>