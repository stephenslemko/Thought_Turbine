class Hotel {
    /*Class field declaration support possible in firefox/chrome. Mozilla docs say 
      limited browser support so this structre may not work on legacy browers */ 
    hotelName = "Undefined";
    location = "Undefined";
    numRooms = 0;
    bookedRooms = 0;
    hasGym = false;
    roomTypes = [];
    hasPool = false;
    hasShuttle = false;
    restaurants;
    constructor(hotelName, location, numRooms, bookedRooms, hasGym) {
        this.hotelName = hotelName;
        this.location = location;
        this.numRooms = numRooms;
        this.bookedRooms = bookedRooms;
        this.hasGym = hasGym;
    }
    get _hotelName() {
        return this.hotelName;
    }
    get _location() {
        return this.location;
    }
    get _numRooms() {
        return this.numRooms;
    }
    get _bookedRooms() {
        return this.bookedRooms;
    }
    get _hasGym() {
        return this.hasGym;
    }
    set _hotelName(name) {
        this.hotelName = name;
    }
    set _location(city) {
        this.location = city;
    }
    set _numRooms(capacity) {
        this.numRooms = capacity;
    }
    set _bookedRooms(filled) {
        this.bookedRooms = filled;
    }
    set _hasGym(lifts) {
        this.hasGym = lifts;
    }
    displayNameLocation() {
        var hotelMotel = document.getElementById("hotelMotel");
        hotelMotel.innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                ${"The hotel is "}${fairmont._hotelName}
                                ${", located in "}${fairmont._location}`;
    }
    displayBookingInfo() {
        var bookingInfo = document.getElementById("roomage");
        bookingInfo.innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                 ${"There are "}
                                 ${fairmont._numRooms - fairmont._bookedRooms}
                                 ${" rooms available today"}`;
    }
    bookRoom() {
        //If else present to allow for button implemention later if time permits
        if (this.bookedRooms === this.numRooms) {
            document.getElementById("booked").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
            ${"All "}${this.numRooms}${" rooms are currently booked, please try again at a later date"}`;
        }
        else {
            this.bookedRooms += 1;
            document.getElementById("booked").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
            ${"You have booked a room. There are now "}${this.numRooms - this.bookedRooms}
            ${"rooms available today"}`;
        }
    }
    cancelRoom() {
        //If else present to allow for button implemention later if time permits
        if (this.numRooms === 0) {
            document.getElementById("cancelled").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
            ${this.numRooms}${" rooms are currently booked, there is no booking to cancel."}`;
        }
        else {
            this.bookedRooms -= 1;
            document.getElementById("cancelled").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
            ${"You have cancelled your room. There are now "}${this.numRooms - this.bookedRooms}
            ${"rooms available today"}`; 
        }
    }
    displayRoomStyle() {
        var canvas = document.getElementById("roomSetting");
        canvas.innerHTML = `${'<br/>'}${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                            ${"The available room types are: "}`;
        for (var i = 0; i < this.roomTypes.length; ++i) {
            canvas.append(this.roomTypes[i] + ", ");
        }
    }
    displayRestaurants() {
        var canvas = document.getElementById("foodHoles");
        var canvasLow = document.getElementById("foodHoleList");
        const colon = ":";
        const boldColon = colon.bold(); 
        const foodHeading = "Hotel has 3 restaurants each with a different theme.";
        const foodHeadingBold = foodHeading.bold();
        const foodHeadingEnd = " They are";
        canvas.innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                            ${foodHeadingBold}${foodHeadingEnd}
                            ${'<br/>'}`;
        let result = "";
        for (let [key, value] of fairmont.restaurants) {
            result += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + key.bold() + boldColon + " " + value + "<br/><br/>";
        }
        canvasLow.innerHTML = `${'<br/>'}${result}`;
    }
};
class Resort extends Hotel {
    resortType = "undefined";
    beachFront = false;
    kidsClub = false;
    kidsAllowed = false;
    constructor(hotel, resortType, beachFront, kidsClub) {
        super(hotel);
        this.resortType = resortType;
        this.beachFront = beachFront;
        this.kidsClub = kidsClub;
    }
    get _resortType() {
        return this.resortType;
    }
    get _beachFront() {
        return this.beachFront;
    }
    get _kidsClub() {
        return this.kidsClub;
    }
    set _resortType(type) {
        this.hotelName = type;
    }
    set _beachFront(beach) {
        this.beachFront = beach;
    }
    set _kidsClub(play) {
        this.kidsClub = play;
    }
    displayResortNameLocation() {
        const resortHeading = "A new Resort has been created: ";
        const resortHeadBold = resortHeading.bold();
        var resortInfo = document.getElementById("resortInfo");
        resortInfo.innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                ${resortHeadBold}${dataiLang._hotelName}
                                ${" located in "}${dataiLang._location}
                                ${". It is a "}${dataiLang._resortType}
                                ${" resort."}`;

    }
    displayBeachStatus() {
        const beachHeading = "Is it on the beach? ";
        const beachHeadBold = beachHeading.bold();
        var beachStatus = document.getElementById("beachStatus");
        beachStatus.innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                 ${beachHeadBold}${dataiLang._beachFront}`;

    }
    displayKidsClubStatus() {
        var count = 0;
        const kidsClubHeading = "Does it have a kids club? ";
        const kidsClubHeadBold = kidsClubHeading.bold();
        var bringKids = document.getElementById("bringKids");
        bringKids.innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                 ${kidsClubHeadBold}${dataiLang._kidsClub}`;
        if (!dataiLang._kidsClub) {
            count +1;
            const babysitting = document.getElementById("babysitting");
            babysitting.innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                     ${"Maybe it's time to ask the grandparents if they can babysit"}`
        }
        else {
            const kidsClubHeading = "Does it have a kids club? ";
            const kidsClubHeadBold = kidsClubHeading.bold();
            var bringKids = document.getElementById("kidsAllowed");
            kidsAllowed.innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                     ${kidsClubHeadBold}${dataiLang._kidsClub}`;
        }
    }
};
const shuttleHeading = "Hotel has a shuttle? ";
const shuttleHeadingBold = shuttleHeading.bold();
const poolHeading = "Hotel has a swimming pool?";
const poolHeadingBold = poolHeading.bold();
let fairmont = new Hotel("Le Château Frontenac", "Quebec City", 611, 556, true);
fairmont.roomTypes = ["City View", "Junior Suite", "Signature", "River View", "Executive"];
fairmont.hasPool = true;
fairmont.hasShuttle = false;
fairmont.restaurants = [["Place Dufferin", "Breakfast & Lunch"]
                       ,["Champlain", "Fine Dining"]
                       ,["1608 Bar", "Pub Fare"]];
let dataiLang = new Resort("","Couples", true, false);
dataiLang.hotelName = "Datai Langkawi"
dataiLang.location = "Kedah, Malaysia"
fairmont.displayNameLocation();
fairmont.displayBookingInfo();
fairmont.bookRoom();
fairmont.cancelRoom();
fairmont.displayRoomStyle();
document.getElementById("shuttleStatus").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                                      ${shuttleHeadingBold}
                                                      ${fairmont.hasShuttle}`;

document.getElementById("poolPresent").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                                    ${poolHeadingBold}
                                                    ${fairmont.hasPool}`;
fairmont.displayRestaurants();
dataiLang.displayResortNameLocation();
dataiLang.displayBeachStatus();
dataiLang.displayKidsClubStatus();


