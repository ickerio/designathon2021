# SYNCS x SUMO Designathon 2021

Project built with SvelteKit and Cloudflare Workers

More info on event [here](https://www.facebook.com/events/247932863641610)

**Theme**: Post COVID-19

---

<h2>International Vaccine Database</h2>

<h3>Why?</h3>
<p>
    At Australias current rate, it may take years to fully vaccinate citizens and create a heard immunity. 
    Globally, less economically developed countries will also to vaccinate making it hard for people to travel between countries due to the differing rate of vaccinations.
    Over 2021 economies will open up and events, meetings and other neccessary in person meetups will begin to increase. Some event organsiers may require all participants to be vaccinated, which by itself is a struggle.
    ivDB aims to solve this problem by safely and securely storing vaccinated records in which, with permission from the record holder, any government or third party can confirm you've been vacicnated.
    This is a much safer and more efficent alternative instead of making countless phone calls and filling (possibly forgable) paperwork.
</p>

<h3>How?</h3>
<p>
    Utilzilizing cryptography, a user is able to grant third parties access to their vaccination documents and metadata. This includes their name, country and date of vaccination.
    This has not been implemented in this proof of concept, but a unguessable and secure UUID is generated on each submission.
    When a government organisation uploads the documents and the personal info, they are given a unique user identification number which is allocated to the person.
    This person is can then share this ID to third parties to confirm their vaccination - the full version would ensure each ID is only usable once ensuring user security.
</p>


Note: 
 - The site api may be taken down in the future to eliminate unnecessary cloud hosting costs
 - Due to the limited competition time some parts of the project do not follow best practices