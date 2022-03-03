WaterTrap = function(height) { 
    var n = height.length;
    var leftBig=0, rightBig=0;
    var l=0,r=n-1;
    var ans=0;
    while(l<r){
        leftBig=Math.max(leftBig,height[l]);
        rightBig=Math.max(rightBig, height[r]);
        if(height[l]<height[r]){
            ans+=leftBig-height[l];
            l++;
        }
        else{
            ans+=rightBig-height[r];
            r--;
        }
    }
    return ans;
};

// var height=[0,1,0,2,1,0,1,3,2,1,2,1];
var height=[4,2,0,3,2,5];
console.log(WaterTrap(height));